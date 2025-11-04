'use client'

import React, { useEffect, useRef } from 'react'

interface SquaresBackgroundProps {
  /**
   * Number of squares in the grid (default: 50)
   */
  squareCount?: number
  /**
   * Base color of squares (default: 'rgba(255, 255, 255, 0.1)')
   */
  squareColor?: string
  /**
   * Highlight color for animated squares (default: 'rgba(212, 175, 55, 0.3)')
   */
  highlightColor?: string
  /**
   * Animation speed in milliseconds (default: 3000)
   */
  animationSpeed?: number
  /**
   * Size of each square in pixels (default: 50)
   */
  squareSize?: number
  /**
   * Gap between squares in pixels (default: 2)
   */
  gap?: number
  /**
   * Additional CSS classes
   */
  className?: string
}

export const SquaresBackground: React.FC<SquaresBackgroundProps> = ({
  squareCount = 50,
  squareColor = 'rgba(255, 255, 255, 0.1)',
  highlightColor = 'rgba(212, 175, 55, 0.3)',
  animationSpeed = 3000,
  squareSize = 50,
  gap = 2,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const squares = containerRef.current.querySelectorAll('.square')
    
    const animateSquare = (square: Element) => {
      const htmlSquare = square as HTMLElement
      htmlSquare.style.backgroundColor = highlightColor
      htmlSquare.style.transform = 'scale(1.1)'
      
      setTimeout(() => {
        htmlSquare.style.backgroundColor = squareColor
        htmlSquare.style.transform = 'scale(1)'
      }, animationSpeed / 2)
    }

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * squares.length)
      animateSquare(squares[randomIndex])
    }, animationSpeed / squareCount)

    return () => clearInterval(interval)
  }, [squareCount, squareColor, highlightColor, animationSpeed])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, ${squareSize}px)`,
        gap: `${gap}px`,
        padding: `${gap}px`
      }}
    >
      {Array.from({ length: squareCount }).map((_, index) => (
        <div
          key={index}
          className="square"
          style={{
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            backgroundColor: squareColor,
            transition: 'all 0.5s ease',
            borderRadius: '4px'
          }}
        />
      ))}
    </div>
  )
}


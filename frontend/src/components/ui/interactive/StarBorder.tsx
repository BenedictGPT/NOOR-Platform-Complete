'use client'

import React, { useRef, useEffect } from 'react'

interface StarBorderProps {
  /**
   * Button content
   */
  children: React.ReactNode
  /**
   * Star color (default: '#D4AF37')
   */
  starColor?: string
  /**
   * Number of stars (default: 20)
   */
  starCount?: number
  /**
   * Animation speed in milliseconds (default: 3000)
   */
  animationSpeed?: number
  /**
   * Button click handler
   */
  onClick?: () => void
  /**
   * Additional CSS classes for the button
   */
  className?: string
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Disabled state
   */
  disabled?: boolean
}

export const StarBorder: React.FC<StarBorderProps> = ({
  children,
  starColor = '#D4AF37',
  starCount = 20,
  animationSpeed = 3000,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create stars
    const stars: HTMLDivElement[] = []
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      star.innerHTML = '✦'
      star.style.position = 'absolute'
      star.style.color = starColor
      star.style.fontSize = '12px'
      star.style.opacity = '0'
      star.style.transition = 'opacity 0.5s ease'
      container.appendChild(star)
      stars.push(star)
    }

    // Animate stars around the border
    const animateStars = () => {
      const rect = container.getBoundingClientRect()
      const perimeter = 2 * (rect.width + rect.height)

      stars.forEach((star, index) => {
        const delay = (index / starCount) * animationSpeed
        const distance = (index / starCount) * perimeter

        setTimeout(() => {
          // Calculate position on border
          let x, y
          if (distance < rect.width) {
            // Top edge
            x = distance
            y = 0
          } else if (distance < rect.width + rect.height) {
            // Right edge
            x = rect.width
            y = distance - rect.width
          } else if (distance < 2 * rect.width + rect.height) {
            // Bottom edge
            x = rect.width - (distance - rect.width - rect.height)
            y = rect.height
          } else {
            // Left edge
            x = 0
            y = rect.height - (distance - 2 * rect.width - rect.height)
          }

          star.style.left = `${x}px`
          star.style.top = `${y}px`
          star.style.opacity = '1'

          setTimeout(() => {
            star.style.opacity = '0'
          }, 500)
        }, delay)
      })
    }

    // Run animation in a loop
    const interval = setInterval(animateStars, animationSpeed)
    animateStars() // Initial run

    return () => {
      clearInterval(interval)
      stars.forEach(star => star.remove())
    }
  }, [starCount, starColor, animationSpeed])

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`relative z-10 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${className}`}
      >
        {children}
      </button>
    </div>
  )
}


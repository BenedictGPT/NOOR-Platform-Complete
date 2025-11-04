'use client'

import React, { useEffect, useRef } from 'react'

interface AuroraBackgroundProps {
  /**
   * Primary aurora color (default: '#D4AF37')
   */
  color1?: string
  /**
   * Secondary aurora color (default: '#F0A500')
   */
  color2?: string
  /**
   * Tertiary aurora color (default: '#2D8BE0')
   */
  color3?: string
  /**
   * Animation speed multiplier (default: 1)
   */
  speed?: number
  /**
   * Opacity of the aurora effect (0-1, default: 0.3)
   */
  opacity?: number
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Children to render on top of the aurora
   */
  children?: React.ReactNode
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  color1 = '#D4AF37',
  color2 = '#F0A500',
  color3 = '#2D8BE0',
  speed = 1,
  opacity = 0.3,
  className = '',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Aurora animation
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.01 * speed

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient layers
      const createGradient = (offsetX: number, offsetY: number, color: string) => {
        const x = canvas.width / 2 + Math.sin(time + offsetX) * 200
        const y = canvas.height / 2 + Math.cos(time + offsetY) * 150

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 400)
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, 'transparent')

        ctx.globalAlpha = opacity
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Draw multiple aurora layers
      createGradient(0, 0, color1)
      createGradient(2, 1, color2)
      createGradient(4, 3, color3)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color1, color2, color3, speed, opacity])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(40px)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}


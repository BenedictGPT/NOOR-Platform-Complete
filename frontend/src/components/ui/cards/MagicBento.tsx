'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface MagicBentoCard {
  color: string
  title: string
  description: string
  label: string
  className?: string
}

export interface MagicBentoProps {
  textAutoHide?: boolean
  enableStars?: boolean
  enableSpotlight?: boolean
  enableBorderGlow?: boolean
  disableAnimations?: boolean
  spotlightRadius?: number
  particleCount?: number
  enableTilt?: boolean
  glowColor?: string
  clickEffect?: boolean
  enableMagnetism?: boolean
  cardData: MagicBentoCard[]
  className?: string
}

export function MagicBento({
  textAutoHide = false,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = 200,
  particleCount = 30,
  enableTilt = true,
  glowColor = '220, 20, 60',
  clickEffect = true,
  enableMagnetism = false,
  cardData,
  className
}: MagicBentoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    if (enableSpotlight || enableMagnetism) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enableSpotlight, enableMagnetism])

  return (
    <div
      ref={containerRef}
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4',
        className
      )}
    >
      {cardData.map((card, index) => (
        <MagicBentoCard
          key={index}
          card={card}
          index={index}
          mousePosition={mousePosition}
          textAutoHide={textAutoHide}
          enableStars={enableStars}
          enableSpotlight={enableSpotlight}
          enableBorderGlow={enableBorderGlow}
          disableAnimations={disableAnimations}
          spotlightRadius={spotlightRadius}
          enableTilt={enableTilt}
          glowColor={glowColor}
          clickEffect={clickEffect}
          enableMagnetism={enableMagnetism}
        />
      ))}
    </div>
  )
}

interface MagicBentoCardProps {
  card: MagicBentoCard
  index: number
  mousePosition: { x: number; y: number }
  textAutoHide?: boolean
  enableStars?: boolean
  enableSpotlight?: boolean
  enableBorderGlow?: boolean
  disableAnimations?: boolean
  spotlightRadius?: number
  enableTilt?: boolean
  glowColor?: string
  clickEffect?: boolean
  enableMagnetism?: boolean
}

function MagicBentoCard({
  card,
  index,
  mousePosition,
  textAutoHide,
  enableStars,
  enableSpotlight,
  enableBorderGlow,
  disableAnimations,
  spotlightRadius = 200,
  enableTilt,
  glowColor,
  clickEffect,
  enableMagnetism
}: MagicBentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setCardPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      })
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const calculateSpotlight = () => {
    if (!enableSpotlight || !cardRef.current) return {}
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = mousePosition.x - rect.left
    const y = mousePosition.y - rect.top
    
    return {
      background: `radial-gradient(${spotlightRadius}px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent)`
    }
  }

  const calculateTilt = () => {
    if (!enableTilt || !isHovered || !cardRef.current) return {}
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = mousePosition.x - rect.left
    const y = mousePosition.y - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={!disableAnimations ? { opacity: 0, y: 20 } : {}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden rounded-2xl p-6 transition-all duration-300',
        card.className
      )}
      style={{
        backgroundColor: card.color,
        boxShadow: isHovered && enableBorderGlow
          ? `0 0 20px rgba(${glowColor}, 0.5)`
          : '0 4px 6px rgba(0, 0, 0, 0.1)',
        ...calculateTilt()
      }}
    >
      {/* Spotlight Effect */}
      {enableSpotlight && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={calculateSpotlight()}
        />
      )}

      {/* Stars Effect */}
      {enableStars && isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-2">
          {card.label}
        </div>
        <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
        <p
          className={cn(
            'text-sm opacity-80 transition-opacity duration-300',
            textAutoHide && isHovered && 'opacity-0'
          )}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  )
}


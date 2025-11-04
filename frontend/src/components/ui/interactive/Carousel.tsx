'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { cn } from '@/lib/utils'

export interface CarouselItem {
  title: string
  description: string
  id: number
  icon?: React.ReactNode
}

export interface CarouselProps {
  baseWidth?: number
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
  loop?: boolean
  round?: boolean
  items: CarouselItem[]
  className?: string
}

export function Carousel({
  baseWidth = 300,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
  round = true,
  items,
  className
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    if (loop) {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1))
    }
  }

  const prevSlide = () => {
    if (loop) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoplay && !isPaused) {
      intervalRef.current = setInterval(nextSlide, autoplayDelay)
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, isPaused, autoplayDelay, currentIndex])

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  })

  return (
    <div
      className={cn('relative w-full overflow-hidden', className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      {...handlers}
    >
      {/* Carousel Container */}
      <div className="relative h-64 md:h-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className={cn(
                'w-full max-w-md p-8 bg-white shadow-xl',
                round && 'rounded-2xl'
              )}
              style={{ width: baseWidth }}
            >
              {items[currentIndex].icon && (
                <div className="mb-4 flex justify-center">
                  {items[currentIndex].icon}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-center">
                {items[currentIndex].title}
              </h3>
              <p className="text-gray-600 text-center">
                {items[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={!loop && currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={!loop && currentIndex === items.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


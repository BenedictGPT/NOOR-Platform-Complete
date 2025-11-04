'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

export interface PillNavItem {
  label: string
  href: string
  ariaLabel: string
}

export interface PillNavProps {
  logo: string
  logoAlt: string
  baseColor: string
  pillColor: string
  pillTextColor: string
  hoveredPillTextColor: string
  ease?: string
  initialLoadAnimation?: boolean
  items: PillNavItem[]
  className?: string
}

export function PillNav({
  logo,
  logoAlt,
  baseColor,
  pillColor,
  pillTextColor,
  hoveredPillTextColor,
  ease = 'power3.out',
  initialLoadAnimation = true,
  items,
  className
}: PillNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const pillRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    if (initialLoadAnimation && navRef.current) {
      gsap.fromTo(
        navRef.current.children,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease
        }
      )
    }
  }, [initialLoadAnimation, ease])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    if (pillRefs.current[index]) {
      gsap.to(pillRefs.current[index], {
        scale: 1.05,
        duration: 0.3,
        ease
      })
    }
  }

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null)
    if (pillRefs.current[index]) {
      gsap.to(pillRefs.current[index], {
        scale: 1,
        duration: 0.3,
        ease
      })
    }
  }

  const isActive = (href: string) => pathname === href

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b',
        className
      )}
      style={{ backgroundColor: baseColor }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logo}
              alt={logoAlt}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold" style={{ color: pillTextColor }}>
              NOOR
            </span>
          </Link>

          {/* Pill Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {items.map((item, index) => (
              <Link
                key={index}
                ref={(el) => {
                  pillRefs.current[index] = el
                }}
                href={item.href}
                aria-label={item.ariaLabel}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="px-6 py-2 rounded-full font-medium transition-all duration-300"
                style={{
                  backgroundColor: isActive(item.href) || hoveredIndex === index
                    ? pillColor
                    : 'transparent',
                  color: isActive(item.href) || hoveredIndex === index
                    ? hoveredPillTextColor
                    : pillTextColor
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full"
            style={{
              backgroundColor: pillColor,
              color: hoveredPillTextColor
            }}
            aria-label="Toggle menu"
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
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}


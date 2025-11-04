'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardNavLink {
  label: string
  href: string
  ariaLabel: string
}

export interface CardNavItem {
  label: string
  bgColor: string
  textColor: string
  links: CardNavLink[]
}

export interface CardNavProps {
  logo: string
  logoAlt: string
  baseColor: string
  menuColor: string
  buttonBgColor: string
  buttonTextColor: string
  items: CardNavItem[]
  className?: string
}

export function CardNav({
  logo,
  logoAlt,
  baseColor,
  menuColor,
  buttonBgColor,
  buttonTextColor,
  items,
  className
}: CardNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          'hidden lg:block fixed top-0 left-0 right-0 z-50 border-b',
          className
        )}
        style={{ backgroundColor: baseColor, borderColor: menuColor }}
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
              <span className="text-xl font-bold" style={{ color: buttonTextColor }}>
                NOOR
              </span>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <button
                    className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: activeCard === index ? item.bgColor : 'transparent',
                      color: activeCard === index ? item.textColor : buttonTextColor
                    }}
                  >
                    {item.label}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeCard === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 min-w-[200px] rounded-lg shadow-xl overflow-hidden"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        {item.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            aria-label={link.ariaLabel}
                            className="block px-4 py-3 transition-all duration-200 hover:pl-6"
                            style={{
                              color: item.textColor,
                              backgroundColor: item.bgColor
                            }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backgroundColor: baseColor, borderColor: menuColor }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt={logoAlt}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold" style={{ color: buttonTextColor }}>
                NOOR
              </span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor
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
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-2 overflow-hidden"
              >
                {items.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div
                      className="px-4 py-2 rounded-lg font-semibold"
                      style={{
                        backgroundColor: item.bgColor,
                        color: item.textColor
                      }}
                    >
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          aria-label={link.ariaLabel}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 rounded transition-colors duration-200"
                          style={{ color: buttonTextColor }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16 lg:h-20" />
    </>
  )
}


'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SpotlightCard } from '@/components/ui/cards/SpotlightCard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6" style={{ fontFamily: 'SUSE Mono, monospace' }}>
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F0A500] to-[#D4AF37] bg-clip-text text-transparent">
                NOOR
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4" style={{ fontFamily: 'SUSE Mono, monospace' }}>
              National Opportunities Optimization & Realization
            </p>
            <p className="text-lg md:text-xl text-[#D4AF37] mb-12">
              Illuminating Human Potential for UAE Vision 2071
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#interfaces">
                <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F0A500] text-black font-bold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg shadow-[#D4AF37]/50">
                  Explore Interfaces
                </button>
              </Link>
              <Link href="#about">
                <button className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-200">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Three Interface Cards Section */}
      <section id="interfaces" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'SUSE Mono, monospace' }}>
              Three Distinct <span className="text-[#D4AF37]">Interfaces</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tailored experiences for every stakeholder
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Federal Government Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/federal/dashboard">
                <SpotlightCard spotlightColor="rgba(212, 175, 55, 0.15)">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer h-full">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#D4AF37] to-[#F0A500] rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'SUSE Mono, monospace' }}>
                        Federal Government
                      </h3>
                      <p className="text-gray-400 mb-6">
                        National workforce intelligence and strategic insights
                      </p>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Eight-Faculty National Analytics
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Workforce Dashboard
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Policy Simulation
                      </li>
                    </ul>
                    <div className="mt-8 text-center">
                      <span className="text-[#D4AF37] font-semibold hover:text-[#F0A500] transition-colors">
                        Enter Dashboard →
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>

            {/* Individual Citizens Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/individual/dashboard">
                <SpotlightCard spotlightColor="rgba(45, 139, 224, 0.15)">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-[#2D8BE0]/30 hover:border-[#2D8BE0] transition-all duration-300 cursor-pointer h-full">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#2D8BE0] to-[#7EBCEE] rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'SUSE Mono, monospace' }}>
                        Individual Citizens
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Personal development and career opportunities
                      </p>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#2D8BE0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Skills Passport (Eight Faculties)
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#2D8BE0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Gamified Assessments
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#2D8BE0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Token-Based Learning
                      </li>
                    </ul>
                    <div className="mt-8 text-center">
                      <span className="text-[#2D8BE0] font-semibold hover:text-[#7EBCEE] transition-colors">
                        Enter Dashboard →
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>

            {/* Institutional Employers Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/institutional/dashboard">
                <SpotlightCard spotlightColor="rgba(193, 19, 23, 0.15)">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-[#C11317]/30 hover:border-[#C11317] transition-all duration-300 cursor-pointer h-full">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#C11317] to-[#7A0A0A] rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'SUSE Mono, monospace' }}>
                        Institutional Employers
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Human capital management and talent acquisition
                      </p>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#F8D72E]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        HCM Dashboard
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#F8D72E]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Employee Eight-Faculty Analytics
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-[#F8D72E]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Talent Matching
                      </li>
                    </ul>
                    <div className="mt-8 text-center">
                      <span className="text-[#F8D72E] font-semibold hover:text-[#F0A500] transition-colors">
                        Enter Dashboard →
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eight-Faculty Model Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'SUSE Mono, monospace' }}>
              The <span className="text-[#D4AF37]">Eight-Faculty Model</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A holistic framework for human development, measuring capabilities across eight interconnected dimensions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '🏃', name: 'Physical', color: '#D4AF37' },
              { icon: '🧠', name: 'Mental', color: '#2D8BE0' },
              { icon: '❤️', name: 'Emotional', color: '#C11317' },
              { icon: '✨', name: 'Spiritual', color: '#F0A500' },
              { icon: '🤝', name: 'Social', color: '#7EBCEE' },
              { icon: '💪', name: 'Volitional', color: '#F8D72E' },
              { icon: '🎓', name: 'Intellectual', color: '#164BA1' },
              { icon: '⚖️', name: 'Moral', color: '#7A0A0A' }
            ].map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-[#D4AF37] transition-all duration-300"
              >
                <div className="text-4xl mb-3">{faculty.icon}</div>
                <h3 className="text-lg font-semibold" style={{ color: faculty.color }}>
                  {faculty.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Vision 2071 Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'SUSE Mono, monospace' }}>
              Aligned with <span className="text-[#D4AF37]">UAE Vision 2071</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              NOOR Platform directly supports the UAE's centennial vision by optimizing national human capital, 
              enhancing workforce capabilities, and creating opportunities for every citizen to reach their full potential.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-[#D4AF37]/30">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">National Optimization</h3>
                <p className="text-gray-400">
                  Data-driven workforce planning and policy insights
                </p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-[#D4AF37]/30">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Talent Development</h3>
                <p className="text-gray-400">
                  Continuous learning and skills enhancement for all citizens
                </p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-[#D4AF37]/30">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Economic Growth</h3>
                <p className="text-gray-400">
                  Matching talent with opportunity for sustainable prosperity
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'SUSE Mono, monospace' }}>
                NOOR Platform
              </h3>
              <p className="text-gray-400 text-sm">
                Illuminating Human Potential for UAE Vision 2071
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Interfaces</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/federal/dashboard" className="hover:text-[#D4AF37] transition-colors">Federal Government</Link></li>
                <li><Link href="/individual/dashboard" className="hover:text-[#2D8BE0] transition-colors">Individual Citizens</Link></li>
                <li><Link href="/institutional/dashboard" className="hover:text-[#C11317] transition-colors">Institutional Employers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 NOOR Platform. All rights reserved.</p>
            <p className="mt-2">Powered by the Eight-Faculty Model</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


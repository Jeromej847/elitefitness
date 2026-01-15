'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="p-6 bg-gray-800 shadow-lg flex justify-between items-center">
      <h1 className="text-3xl font-bold">Elite Fitness Gym</h1>

      {/* Hamburger Button */}
      <button 
        id="hamburger" 
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="w-6 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white"></span>
      </button>

      {/* Mobile Menu */}
      <nav 
        id="mobileMenu" 
        className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex md:space-x-6 flex-col md:flex-row bg-gray-800 md:bg-transparent absolute md:static top-16 right-6 p-6 md:p-0 rounded-xl md:rounded-none shadow-lg md:shadow-none z-50`}
      >
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/strength" className="hover:text-blue-400">Strength</Link>
        <Link href="/cardio" className="hover:text-blue-400">Cardio</Link>
        <Link href="/yoga" className="hover:text-blue-400">Yoga</Link>
      </nav>
    </header>
  )
}

'use client'

import Header from './components/Header'
import Link from 'next/link'
import { useState } from 'react'
import './hero.css'

export default function Home() {
  const [imageSrc, setImageSrc] = useState('/img/Gym.jpg')

  return (
    <div className="hero text-white font-sans min-h-screen bg-gray-900">
      <div className="overlay"></div>
      
      <Header />

      <section className="max-w-5xl mx-auto mt-10 px-6 relative z-10">
        <div className="w-full rounded-xl shadow-lg overflow-hidden bg-gray-700">
          <img 
            src={imageSrc}
            alt="Elite Fitness Gym"
            className="w-full h-64 object-cover"
            onError={() => {
              if (imageSrc === '/img/Gym.jpg') {
                setImageSrc('/api/image/Gym.jpg');
              }
            }}
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative z-10">
        <article className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-4">Strength Training</h2>
          <p className="mb-4">Build muscle, improve strength, and test your limits.</p>
          <Link href="/strength" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Sign Up</Link>
        </article>

        <article className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-4">Cardio Classes</h2>
          <p className="mb-4">Boost stamina with high-energy cardio workouts.</p>
          <Link href="/cardio" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Sign Up</Link>
        </article>

        <article className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-4">Yoga Sessions</h2>
          <p className="mb-4">Improve flexibility and mental focus through yoga.</p>
          <Link href="/yoga" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Sign Up</Link>
        </article>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    classType: '',
    password: '',
  })
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Redirect to thank you page
    router.push('/thankyou')
  }

  return (
    <div className="hero text-white font-sans min-h-screen bg-gray-900">
      <div className="overlay"></div>
      
      <Header />

      <section className="max-w-xl mx-auto mt-12 bg-gray-800 p-8 rounded-xl shadow-lg relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">New Client Registration</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Choose Class</label>
            <select 
              name="classType"
              value={formData.classType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            >
              <option value="">Select a class</option>
              <option value="strength">Strength Training</option>
              <option value="cardio">Cardio Classes</option>
              <option value="yoga">Yoga Sessions</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 py-2 rounded font-bold hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-4 text-gray-300">
          Already have an account? <Link href="/" className="text-blue-400 hover:text-blue-300">Back to Home</Link>
        </p>
      </section>

      <Footer />
    </div>
  )
}

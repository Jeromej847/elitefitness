import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="hero text-white font-sans min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="overlay"></div>
      
      <Header />

      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl max-w-lg text-center relative z-10 mt-20">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Thank You!</h1>

        <p className="text-lg mb-6 text-gray-200">
          Your registration has been successfully submitted.  
          We're excited to welcome you to <span className="font-semibold text-white">Elite Fitness Gym</span>!
        </p>

        <p className="text-gray-300 mb-8">
          A member of our team will contact you shortly with more details.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="block bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>

          <Link 
            href="/strength"
            className="block bg-gray-700 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            Explore Our Classes
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

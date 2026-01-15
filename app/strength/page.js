import Header from '../components/Header'
import Link from 'next/link'

export default function Strength() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto p-6 relative z-10">
        <h1 className="text-3xl font-bold mt-4">Strength Training Classes</h1>
        <p className="mt-4 max-w-2xl">Our strength program helps you develop muscle, endurance, and power with guided programs and professional trainers.</p>
        
        <div className="mt-8 space-y-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Beginner Strength</h2>
            <p className="text-gray-300 mb-3">Perfect for those starting their fitness journey. Learn proper form and build a solid foundation.</p>
            <Link href="/register" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Enroll Now</Link>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Intermediate Strength</h2>
            <p className="text-gray-300 mb-3">Level up your training with advanced techniques and heavier weights.</p>
            <Link href="/register" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Enroll Now</Link>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Advanced Powerlifting</h2>
            <p className="text-gray-300 mb-3">Master the big three lifts and push your limits with competitive training.</p>
            <Link href="/register" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Enroll Now</Link>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Back to Home</Link>
        </div>
      </main>
    </div>
  )
}

import Header from '../components/Header'
import Link from 'next/link'

export default function Cardio() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto p-6 relative z-10">
        <h1 className="text-3xl font-bold mt-4">Cardio Classes</h1>
        <p className="mt-4 max-w-2xl">Boost your stamina with our high-energy cardio workouts. From running to cycling, we have classes for all fitness levels.</p>
        
        <div className="mt-8 space-y-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">HIIT Training</h2>
            <p className="text-gray-300 mb-3">High-Intensity Interval Training for maximum calorie burn in minimal time.</p>
            <Link href="/register" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Enroll Now</Link>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Spin Class</h2>
            <p className="text-gray-300 mb-3">Indoor cycling with motivating instructors and great music to keep you energized.</p>
            <Link href="/register" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Enroll Now</Link>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Treadmill Running</h2>
            <p className="text-gray-300 mb-3">Improve your endurance with guided running programs and varying intensities.</p>
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

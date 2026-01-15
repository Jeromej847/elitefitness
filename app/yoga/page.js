import Header from '../components/Header'
import Link from 'next/link'

export default function Yoga() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto p-6 relative z-10">
        <h1 className="text-3xl font-bold mt-4">Yoga Sessions</h1>
        <p className="mt-4 max-w-2xl">Improve flexibility, mental focus, and overall well-being through our rejuvenating yoga classes.</p>
        
        <div className="mt-8 space-y-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Hatha Yoga</h2>
            <p className="text-gray-300 mb-3">Traditional yoga focusing on body alignment and breathing techniques.</p>
            <Link href="/register" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Enroll Now</Link>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Vinyasa Flow</h2>
            <p className="text-gray-300 mb-3">Dynamic yoga practice that links breath with movement for improved flexibility.</p>
            <Link href="/register" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block">Enroll Now</Link>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Restorative Yoga</h2>
            <p className="text-gray-300 mb-3">Gentle yoga for relaxation and recovery, perfect for stress relief.</p>
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

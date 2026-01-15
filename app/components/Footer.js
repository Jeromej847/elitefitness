'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-10">
      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p>📞 Phone: +353 85 123 4567</p>
      <p>📧 Email: elitefitness@example.com</p>
      <p>📍 Location: Dundalk Louth, Ireland</p>
      
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-blue-400">Instagram</a>
        <a href="#" className="hover:text-blue-400">Facebook</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        &copy; 2025 Elite Fitness Gym. All rights reserved.
      </p>
    </footer>
  )
}

import './globals.css'

export const metadata = {
  title: 'Elite Fitness Gym',
  description: 'Join Elite Fitness Gym for Strength, Cardio, and Yoga training',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-sans">
        {children}
      </body>
    </html>
  )
}

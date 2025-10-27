import Link from 'next/link'

export default function HeaderMinimal() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200" style={{backgroundColor: '#1E88E5'}}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="font-bold text-2xl" style={{color: '#1E88E5'}}>C</span>
            </div>
            <span className="text-2xl font-bold text-white">CoHire</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:opacity-80 transition-colors font-medium">
              Home
            </Link>
            <Link href="/tools" className="text-white hover:opacity-80 transition-colors font-medium">
              Browse Tools
            </Link>
            <Link href="/rent" className="text-white hover:opacity-80 transition-colors font-medium">
              Rent Tools
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-white hover:opacity-80 transition-colors hidden sm:block">
              Sign In
            </Link>
            <Link href="/signup" className="bg-white text-blue-600 px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg font-medium" style={{color: '#1E88E5'}}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


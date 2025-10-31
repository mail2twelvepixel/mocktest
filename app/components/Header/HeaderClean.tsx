import Link from 'next/link'

export default function HeaderClean() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">CoHire</span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-blue-600 transition-colors">
              Browse Tools
            </Link>
            <Link href="/rent" className="text-gray-700 hover:text-blue-600 transition-colors">
              Rent Tools
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-gray-700 hover:text-gray-900 transition-colors hidden sm:block">
              Sign In
            </Link>
            <Link href="/signup" className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


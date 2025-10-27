import Link from 'next/link'

export default function HeaderModern() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">CoHire</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors font-semibold text-lg">
              Home
            </Link>
            <Link href="/tools" className="text-gray-300 hover:text-white transition-colors font-semibold text-lg">
              Browse Tools
            </Link>
            <Link href="/rent" className="text-gray-300 hover:text-white transition-colors font-semibold text-lg">
              Rent Tools
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors font-semibold hidden sm:block">
              Sign In
            </Link>
            <Link href="/signup" className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-bold text-lg">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


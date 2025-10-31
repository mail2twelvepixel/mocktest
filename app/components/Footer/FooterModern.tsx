import Link from 'next/link'

export default function FooterModern() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <span className="text-3xl font-bold text-white">CoHire</span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed text-lg">
              Revolutionizing how talent connects with opportunity through peer-to-peer hiring.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xl">Platform</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-base">Home</Link></li>
              <li><Link href="/candidates" className="text-gray-400 hover:text-white transition-colors text-base">Candidates</Link></li>
              <li><Link href="/employers" className="text-gray-400 hover:text-white transition-colors text-base">Employers</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-base">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xl">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-base">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-base">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-base">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-base">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-500 text-base">
            © {new Date().getFullYear()} CoHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


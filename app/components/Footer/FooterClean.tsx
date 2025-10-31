import Link from 'next/link'

export default function FooterClean() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">CoHire</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-md">
              Connecting talent with opportunity through peer-to-peer hiring.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Home</Link></li>
              <li><Link href="/candidates" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Candidates</Link></li>
              <li><Link href="/employers" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Employers</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} CoHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


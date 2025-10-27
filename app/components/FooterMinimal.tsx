import Link from 'next/link'

export default function FooterMinimal() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">CoHire</span>
            </Link>
            <p className="text-gray-600 max-w-md leading-relaxed">
              The peer-to-peer platform connecting tool owners with people who need quality tools. Rent locally, save money, build together.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-lg">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/tools" className="text-gray-600 hover:text-blue-600 transition-colors">Browse Tools</Link></li>
              <li><Link href="/rent" className="text-gray-600 hover:text-blue-600 transition-colors">Rent Your Tools</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CoHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


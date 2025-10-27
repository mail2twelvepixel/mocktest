import HeaderMinimal from '../components/HeaderMinimal'
import FooterMinimal from '../components/FooterMinimal'

export default function HomeVariant2() {
  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: '#F9FAFB'}}>
      {/* Custom Green Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200" style={{backgroundColor: '#E31937'}}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-2xl" style={{color: '#E31937'}}>C</span>
              </div>
              <span className="text-2xl font-bold text-white">CoHire</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:opacity-80 transition-colors font-medium">
                Home
              </a>
              <a href="/tools" className="text-white hover:opacity-80 transition-colors font-medium">
                Browse Tools
              </a>
              <a href="/rent" className="text-white hover:opacity-80 transition-colors font-medium">
                Rent Tools
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="/login" className="text-white hover:opacity-80 transition-colors hidden sm:block">
                Sign In
              </a>
              <a href="/signup" className="bg-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg font-medium" style={{color: '#E31937'}}>
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="flex-1" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{color: '#212121'}}>
              Rent Tools, Build
              <span style={{color: '#E31937'}}> Anything</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{color: '#212121'}}>
              Connect with local tool owners and rent everything you need. From power drills to lawn mowers, find the perfect tool for your project.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/signup" className="text-white px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold text-lg" style={{backgroundColor: '#E31937'}}>
                Find Tools
              </a>
              <a href="/employers" className="bg-white text-gray-900 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all font-semibold text-lg">
                List Your Tools
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#E31937', opacity: 0.1}}>
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#212121'}}>Find Nearby Tools</h3>
              <p className="text-gray-600">Browse local tools available for rent in your area. Everything from hand tools to power equipment.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#43A047', opacity: 0.1}}>
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#212121'}}>Save Money</h3>
              <p className="text-gray-600">Why buy when you can rent? Affordable daily or weekly rates for all your project needs.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#FDD835', opacity: 0.2}}>
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#212121'}}>Trusted Community</h3>
              <p className="text-gray-600">Verified tool owners and honest reviews ensure safe, reliable tool rentals every time.</p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#212121'}}>Popular Tools Available</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
                <div className="text-4xl mb-3">🔨</div>
                <h4 className="font-semibold" style={{color: '#212121'}}>Power Tools</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
                <div className="text-4xl mb-3">🌳</div>
                <h4 className="font-semibold" style={{color: '#212121'}}>Lawn Care</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-semibold" style={{color: '#212121'}}>Hand Tools</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
                <div className="text-4xl mb-3">🚜</div>
                <h4 className="font-semibold" style={{color: '#212121'}}>Equipment</h4>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-12 text-center text-white" style={{background: 'linear-gradient(135deg, #E31937 0%, #FF0D00 100%)'}}>
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of people renting tools in their neighborhood</p>
            <a href="/signup" className="bg-white px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg font-bold text-lg inline-block" style={{color: '#E31937'}}>
              Get Started Today
            </a>
          </div>
        </div>
      </main>

      <FooterMinimal />
    </div>
  )
}

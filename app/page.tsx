import HeaderMinimal from './components/HeaderMinimal'
import FooterMinimal from './components/FooterMinimal'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: '#F9FAFB'}}>
      <HeaderMinimal />
      
      <main className="flex-1" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{color: '#212121'}}>
              Rent Tools, Build
              <span style={{color: '#D0021C'}}> Anything</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{color: '#212121'}}>
              Connect with local tool owners and rent everything you need. From power drills to lawn mowers, find the perfect tool for your project.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/signup" className="text-white px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold text-lg" style={{backgroundColor: '#D0021C'}}>
                Find Tools
              </a>
              <a href="/employers" className="bg-white text-gray-900 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all font-semibold text-lg">
                List Your Tools
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#D0021C', opacity: 0.1}}>
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

          {/* Popular Tools Section */}
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

          {/* CTA Section */}
          <div className="rounded-3xl p-12 text-center text-white" style={{background: 'linear-gradient(135deg, #D0021C 0%, #43A047 100%)'}}>
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of people renting tools in their neighborhood</p>
            <a href="/signup" className="bg-white px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg font-bold text-lg inline-block" style={{color: '#D0021C'}}>
              Get Started Today
            </a>
          </div>
        </div>
      </main>

      <FooterMinimal />
    </div>
  )
}

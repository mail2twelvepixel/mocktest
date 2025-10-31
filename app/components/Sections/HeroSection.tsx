import Link from 'next/link'

export default function HeroSection() {
    return (
        <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#212121' }}>
                Rent Tools, Build
                <span style={{ color: '#DC143C' }}> Anything</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#212121' }}>
                Connect with local tool owners and rent everything you need. From power drills to lawn mowers, find the perfect tool for your project.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href="/signup" className="text-white px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold text-lg" style={{ background: 'linear-gradient(135deg, #DC143C 0%, #C41E3A 100%)' }}>
                    Find Tools
                </Link>
                <Link href="/employers" className="bg-white text-gray-900 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all font-semibold text-lg">
                    List Your Tools
                </Link>
            </div>
        </div>
    )
}

export default function FeaturesSection() {
    const features = [
        {
            icon: '🔍',
            title: 'Find Nearby Tools',
            description: 'Browse local tools available for rent in your area. Everything from hand tools to power equipment.',
            gradient: 'linear-gradient(135deg, #DC143C 0%, #C41E3A 100%)'
        },
        {
            icon: '💰',
            title: 'Save Money',
            description: 'Why buy when you can rent? Affordable daily or weekly rates for all your project needs.',
            gradient: 'linear-gradient(135deg, #C41E3A 0%, #DC143C 100%)'
        },
        {
            icon: '✅',
            title: 'Trusted Community',
            description: 'Verified tool owners and honest reviews ensure safe, reliable tool rentals every time.',
            gradient: 'linear-gradient(135deg, #DC143C 0%, #8B0000 100%)'
        }
    ]

    return (
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                    <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                        style={{ background: feature.gradient, opacity: 0.15 }}
                    >
                        <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#212121' }}>{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}
        </div>
    )
}


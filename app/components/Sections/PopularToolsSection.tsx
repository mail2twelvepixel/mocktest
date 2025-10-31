export default function PopularToolsSection() {
    const tools = [
        { icon: '🔨', name: 'Power Tools' },
        { icon: '🌳', name: 'Lawn Care' },
        { icon: '🔧', name: 'Hand Tools' },
        { icon: '🚜', name: 'Equipment' }
    ]

    return (
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#212121' }}>Popular Tools Available</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
                        <div className="text-4xl mb-3">{tool.icon}</div>
                        <h4 className="font-semibold" style={{ color: '#212121' }}>{tool.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}


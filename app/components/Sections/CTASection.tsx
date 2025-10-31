import Link from 'next/link'

export default function CTASection() {
    return (
        <div className="rounded-3xl p-12 text-center text-white" style={{ background: 'linear-gradient(135deg, #DC143C 0%, #C41E3A 50%, #8B0000 100%)' }}>
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of people renting tools in their neighborhood</p>
            <Link href="/signup" className="bg-white px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg font-bold text-lg inline-block" style={{ color: '#DC143C' }}>
                Get Started Today
            </Link>
        </div>
    )
}


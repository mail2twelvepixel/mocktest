'use client'

import { useState } from 'react'
import Header from './components/Header/Header'
import FooterMinimal from './components/Footer/FooterMinimal'
import HeroSection from './components/Sections/HeroSection'
import FeaturesSection from './components/Sections/FeaturesSection'
import PopularToolsSection from './components/Sections/PopularToolsSection'
import CTASection from './components/Sections/CTASection'

export default function Home() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F9FAFB' }}>
            <Header isSearchOpen={isSearchOpen} onSearchOverlayChange={setIsSearchOpen} />

            <main className="flex-1" style={{ backgroundColor: '#F9FAFB' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <HeroSection />
                    <FeaturesSection />
                    <PopularToolsSection />
                    <CTASection />
                </div>
            </main>

            <FooterMinimal />
        </div>
    )
}

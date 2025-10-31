'use client'

import Link from 'next/link'
import SearchBar from '../Search/SearchBar'

interface HeaderProps {
    isSearchOpen?: boolean
    onSearchOverlayChange?: (isOpen: boolean) => void
}

export default function Header({ isSearchOpen, onSearchOverlayChange }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 relative" style={{ background: 'linear-gradient(135deg, #DC143C 0%, #C41E3A 100%)' }}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between h-14">
                    <Link href="/" className="flex items-center space-x-2 relative z-[200]">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                            <span className="font-bold text-2xl" style={{ color: '#DC143C' }}>C</span>
                        </div>
                        <span className={`text-2xl font-bold transition-colors ${isSearchOpen ? 'text-[#DC143C]' : 'text-white'}`}>CoHire</span>
                    </Link>

                    {/* Search Bar Component */}
                    <SearchBar onOverlayChange={onSearchOverlayChange} />

                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="text-white hover:opacity-80 transition-colors hidden sm:block">Sign In</Link>
                        <Link href="/signup" className="bg-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg font-medium" style={{ color: '#DC143C' }}>Get Started</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}


'use client'

import { useState, useEffect } from 'react'
import { DateRange } from 'react-date-range'
import { Button } from '@heroui/react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import ProductCard from './ProductCard'

interface SearchBarProps {
    onOverlayChange?: (isOpen: boolean) => void
}

export default function SearchBar({ onOverlayChange }: SearchBarProps) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isDateRangeOpen, setIsDateRangeOpen] = useState(false)
    
    const handleOverlayToggle = (open: boolean) => {
        setIsSearchOpen(open)
        onOverlayChange?.(open)
    }
    const [searchQuery, setSearchQuery] = useState('')
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })

    const formatDateRange = () => {
        if (dateRange.startDate && dateRange.endDate) {
            const start = dateRange.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            const end = dateRange.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            return `${start} - ${end}`
        }
        return 'Add Dates'
    }

    // Close calendar when overlay closes
    useEffect(() => {
        if (!isSearchOpen) {
            setIsDateRangeOpen(false)
        }
    }, [isSearchOpen])

    // Sample products data with specific tool names and relevant images (246x246)
    const products = [
        { id: 1, name: 'Driller', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=246&h=246&fit=crop', price: '$25/day', location: 'Downtown', km: '2.3 km' },
        { id: 2, name: 'Lawn Mower', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=246&h=246&fit=crop', price: '$35/day', location: 'Park District', km: '5.1 km' },
        { id: 3, name: 'Power Drill', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=246&h=246&fit=crop', price: '$30/day', location: 'Midtown', km: '3.7 km' },
        { id: 4, name: 'Circular Saw', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=246&h=246&fit=crop', price: '$28/day', location: 'Northside', km: '6.2 km' },
        { id: 5, name: 'Pressure Washer', image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=246&h=246&fit=crop', price: '$40/day', location: 'East Side', km: '4.5 km' },
        { id: 6, name: 'Generator', image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=246&h=246&fit=crop', price: '$45/day', location: 'West End', km: '7.8 km' },
        { id: 7, name: 'Tile Cutter', image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=246&h=246&fit=crop', price: '$32/day', location: 'Southside', km: '5.9 km' },
        { id: 8, name: 'Paint Sprayer', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=246&h=246&fit=crop', price: '$22/day', location: 'Riverside', km: '3.2 km' },
        { id: 9, name: 'Chainsaw', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=246&h=246&fit=crop', price: '$38/day', location: 'Uptown', km: '8.1 km' }
    ]

    return (
        <>
            {/* Desktop Search Bar */}
            <div className="flex-1 flex justify-center max-w-2xl mx-8 hidden md:block relative">
                {isSearchOpen && <div className="w-full h-12" />}
                <div
                    className={`flex items-center space-x-3 bg-white rounded-full border ${isSearchOpen ? 'fixed left-1/2 top-4 -translate-x-1/2 z-[200] w-[calc((100vw-2rem)*0.6)] max-w-2xl' : 'relative z-[200] w-full border-gray-200'}`}
                    style={{ height: '52px', paddingLeft: '24px', paddingRight: '6px', ...(isSearchOpen ? { borderColor: '#DC143C' } : {}) }}
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => handleOverlayToggle(true)}
                        placeholder="Search tools, categories..."
                        className={`flex-1 bg-transparent border-none outline-none text-sm transition-colors ${isSearchOpen ? 'text-gray-900 placeholder-gray-400' : 'text-gray-900 placeholder-gray-400'}`}
                    />
                    
                    {/* Search Icon - Right */}
                    <button
                        type="button"
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                        style={{ backgroundColor: '#DC143C' }}
                    >
                        <svg 
                            className="w-5 h-5 text-white"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    
                    {/* Date Range Button - Only visible when overlay is open */}
                    {isSearchOpen && (
                        <>
                            {/* Separator */}
                            <div className="h-6 w-px bg-gray-300 flex-shrink-0"></div>
                            
                            <div className="relative flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                                <Button
                                    onPress={() => {
                                        setIsDateRangeOpen(!isDateRangeOpen)
                                    }}
                                    variant="light"
                                    className="flex items-center space-x-2 px-3 py-1.5 h-auto min-w-0"
                                    startContent={
                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    }
                                    endContent={
                                        <svg 
                                            className={`w-3 h-3 transition-transform ${isDateRangeOpen ? 'rotate-180' : ''} text-gray-600`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    }
                                >
                                    <span className="text-sm font-medium whitespace-nowrap text-gray-700">Add Dates</span>
                                </Button>
                            
                            {/* Date Range Calendar Dropdown */}
                            {isDateRangeOpen && (
                                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 z-[250]" style={{ minWidth: '600px' }}>
                                    <div className="flex justify-center overflow-visible">
                                        <div className="relative z-50">
                                            <DateRange
                                                ranges={[dateRange]}
                                                onChange={(ranges: any) => {
                                                    const selection = ranges.selection
                                                    setDateRange({
                                                        startDate: selection.startDate || new Date(),
                                                        endDate: selection.endDate || new Date(),
                                                        key: 'selection'
                                                    })
                                                }}
                                                moveRangeOnFirstSelection={false}
                                                months={2}
                                                direction="horizontal"
                                                rangeColors={['#DC143C']}
                                                showDateDisplay={true}
                                                minDate={new Date()}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Search Button */}
            <Button
                onPress={() => handleOverlayToggle(true)}
                isIconOnly
                variant="light"
                className="md:hidden text-white hover:opacity-80 relative z-[200]"
                aria-label="Search"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </Button>

            {/* Expanding Search Overlay - Appears from top */}
            {isSearchOpen && (
                <div className="fixed top-0 left-1/2 -translate-x-1/2 bg-white shadow-2xl z-[100] border-t border-gray-100 rounded-b-2xl" style={{ width: 'calc(100% - 2rem)', maxWidth: '1280px', height: '95vh' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 h-full flex flex-col relative z-50">
                        <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
                            {/* Left Sidebar - Suggestions and Categories */}
                            <div className="relative z-50 w-full lg:w-1/6 flex flex-col">
                                <h3 className="text-lg font-semibold mb-4" style={{ color: '#212121' }}>Suggestions</h3>
                                <div className="space-y-2 mb-6">
                                    {['Power Tools', 'Lawn Care', 'Hand Tools', 'Construction Equipment', 'Garden Tools', 'Automotive', 'Painting Supplies'].map((suggestion) => (
                                        <Button
                                            key={suggestion}
                                            variant="light"
                                            className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg group justify-start"
                                            onPress={() => handleOverlayToggle(false)}
                                            startContent={
                                                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#DC143C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            }
                                        >
                                            <span className="text-gray-700 group-hover:text-[#DC143C]">{suggestion}</span>
                                        </Button>
                                    ))}
                                </div>

                                {/* Popular Categories */}
                                <div className="mt-auto pt-6 border-t border-gray-200">
                                    <h3 className="text-sm font-semibold mb-3 text-gray-600 uppercase tracking-wide">Popular Categories</h3>
                                    <div className="flex flex-col gap-2">
                                        {['Power Tools', 'Lawn Care', 'Hand Tools', 'Equipment', 'Garden Tools', 'Construction'].map((category) => (
                                            <Button
                                                key={category}
                                                variant="bordered"
                                                radius="full"
                                                className="w-full px-4 py-2 border-2 border-gray-200 hover:border-[#DC143C] hover:text-[#DC143C] hover:bg-[#DC143C]/5 text-sm font-medium justify-start"
                                            >
                                                {category}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Products Grid - Right */}
                            <div className="relative z-50 w-full lg:w-5/6 flex flex-col min-h-0">
                                <h3 className="text-lg font-semibold mb-4 flex-shrink-0" style={{ color: '#212121' }}>Available Items</h3>
                                <div className="grid grid-cols-4 gap-4 flex-1 overflow-y-auto pr-2 min-h-0" style={{ maxHeight: '100%' }}>
                                    {products.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop overlay when search is open */}
            {isSearchOpen && (
                <div
                    className="fixed inset-0 z-[5]"
                    style={{ backgroundColor: 'rgba(14, 27, 42, 0.5)' }}
                    onClick={() => handleOverlayToggle(false)}
                />
            )}
        </>
    )
}

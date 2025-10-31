import Image from 'next/image'

interface Product {
    id: number
    name: string
    image: string
    price: string
    location: string
    km: string
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col" style={{ height: '380px', minHeight: '380px' }}>
            {/* Product Image */}
            <div className="bg-gray-100 overflow-hidden relative flex-shrink-0 w-full aspect-square">
                <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                />
            </div>
            
            {/* Product Details */}
            <div className="p-3 flex flex-col flex-1">
                {/* Price */}
                <div className="mb-2">
                    <span className="text-lg font-bold" style={{ color: '#DC143C' }}>{product.price}</span>
                </div>
                
                {/* Title */}
                <h4 className="font-semibold text-sm mb-1" style={{ color: '#212121' }}>{product.name}</h4>
                
                {/* Location and Distance - Same Line */}
                <div className="flex items-center justify-between text-xs text-gray-600 mt-auto gap-2">
                    <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{product.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{product.km}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


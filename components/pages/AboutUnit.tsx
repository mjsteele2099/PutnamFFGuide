import { Bed, Bath, Wifi, Tv, Car, Wind, ChevronLeft, ChevronRight } from 'lucide-react'
import { amenities } from '@/data/content'
import { useState } from 'react'

const highlights = [
  { icon: Bed, label: '2 Queen Beds', detail: 'Premium linens' },
  { icon: Bath, label: 'Private Bath', detail: 'Towels provided' },
  { icon: Wifi, label: 'High-Speed WiFi', detail: 'Perfect for work' },
  { icon: Tv, label: 'Smart TV', detail: 'Main bedroom' },
  { icon: Car, label: 'Free Parking', detail: '2 dedicated spaces' },
  { icon: Wind, label: 'Climate Control', detail: 'Heat & Window Units' },
]

const unitPhotos = [
  { src: '/images/IMG_0722.jpeg', caption: '3 Season Room - Dining Area' },
  { src: '/images/IMG_0723.jpeg', caption: '3 Season Room - Another View' },
  { src: '/images/IMG_0724.jpeg', caption: 'Bathroom with Skylight' },
  { src: '/images/IMG_0726.jpeg', caption: 'Walk-in Shower' },
  { src: '/images/IMG_0727.jpeg', caption: 'Living Room' },
  { src: '/images/IMG_0728.jpeg', caption: 'Living Room - Another Angle' },
  { src: '/images/IMG_0729.jpeg', caption: 'Kitchen' },
  { src: '/images/IMG_0783.jpeg', caption: 'Unit Interior' },
  { src: '/images/IMG_0784.jpeg', caption: 'Unit Space' },
  { src: '/images/IMG_0785.jpeg', caption: 'Unit Details' },
  { src: '/images/IMG_0786.jpeg', caption: 'Unit Features' },
  { src: '/images/IMG_0787.jpeg', caption: 'Unit Layout' },
  { src: '/images/IMG_0788.jpeg', caption: 'Unit View' },
  { src: '/images/IMG_0789.jpeg', caption: 'Unit Amenities' },
  { src: '/images/IMG_0790.jpeg', caption: 'Unit Comfort' },
  { src: '/images/IMG_0791.jpeg', caption: 'Unit Style' },
  { src: '/images/IMG_0792.jpeg', caption: 'Unit Design' },
]

export default function AboutUnit({ goToPage }: { goToPage: (page: number) => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % unitPhotos.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + unitPhotos.length) % unitPhotos.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }
  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-book-cover mb-6">
          About the Unit
        </h1>
        <div className="w-24 h-1 bg-book-accent mb-8" />

        {/* ===========================================
            PHOTO SLIDESHOW - TEMPORARILY DISABLED
            =========================================== 
            
            This section contains an interactive photo gallery/slideshow with:
            - 17 unit photos showcasing all rooms and spaces
            - Main large image display (500px height)
            - Left/Right navigation arrows
            - Thumbnail strip at bottom for quick navigation
            - Dot indicators for mobile devices
            - Image captions showing room names
            - Image counter (e.g., "5 / 17")
            - Smooth transitions and hover effects
            
            The slideshow uses state management to track currentImageIndex
            and provides prev/next/goToImage functions for navigation.
            
            All photos are stored in /public/images/ as IMG_XXXX.jpeg files
            and are defined in the unitPhotos array at the top of this file.
            
            TODO: Fix image loading issues - some photos not displaying
            Possible solutions:
            1. Optimize large image files (currently 3-4MB each)
            2. Use Next.js Image component for better optimization
            3. Implement lazy loading for better performance
            4. Check browser caching issues
            
            To re-enable: Uncomment this entire section
            =========================================== */}
        
        {/* SLIDESHOW COMMENTED OUT - UNCOMMENT TO RE-ENABLE
        <div className="mb-8 relative rounded-lg overflow-hidden shadow-2xl bg-black">
          <div className="relative h-96 md:h-[500px]">
            <img 
              src={unitPhotos[currentImageIndex].src}
              alt={unitPhotos[currentImageIndex].caption}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white font-sans text-sm md:text-base text-center">
                {unitPhotos[currentImageIndex].caption}
              </p>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-book-cover p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-book-cover p-3 rounded-full shadow-lg transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-sans">
              {currentImageIndex + 1} / {unitPhotos.length}
            </div>
          </div>

          <div className="bg-gray-900 p-4 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {unitPhotos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-book-accent scale-110' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={photo.src} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 md:hidden">
            {unitPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        END SLIDESHOW COMMENT */}


        {/* Description */}
        <div className="prose prose-lg mb-8">
          <p className="text-book-text font-serif leading-relaxed">
            Welcome to your home away from home! This thoughtfully designed unit offers 
            everything you need for a comfortable stay. Enjoy indoor comfort with two bedrooms, 
            a fully equipped kitchen, and a spacious 3 season room. Step outside to your private, 
            fenced-in backyard with porch, outdoor furniture, and Weber grill - perfect for 
            relaxing or entertaining!
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4">
            Unit Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center">
                  <Icon className="text-book-accent mb-2" size={32} strokeWidth={1.5} />
                  <p className="font-sans font-semibold text-book-cover text-sm">
                    {item.label}
                  </p>
                  <p className="font-sans text-book-accent text-xs mt-1">
                    {item.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Space Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4">
            The Space
          </h2>
          <div className="space-y-4 font-sans text-book-text">
            <div>
              <h3 className="font-semibold text-book-accent mb-2">3 Season Room</h3>
              <p className="text-sm leading-relaxed">
                Welcome! This bright and airy 3 season room is perfect for enjoying meals, 
                sipping your morning coffee, or simply relaxing. Features dining table and seating. 
               Coat hooks and storage available for your convenience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-book-accent mb-2">Kitchen</h3>
              <p className="text-sm leading-relaxed">
                Fully equipped kitchen with full-size appliances, cookware, and dishes. 
                Coffee maker with complimentary coffee pods, dishwasher, microwave, and 
                everything you need to prepare meals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-book-accent mb-2">Bathroom</h3>
              <p className="text-sm leading-relaxed">
                Private bathroom with shower, fresh towels, hair dryer, and basic toiletries 
                including shampoo and body wash.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-book-accent mb-2">Main Bedroom</h3>
              <p className="text-sm leading-relaxed">
                Comfortable queen-size bed with premium linens, dresser for your belongings, 
                and smart TV with streaming services. Extra blankets and pillows in the closet. 
                Perfect for a restful night's sleep.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-book-accent mb-2">Spare Bedroom (Office Setup)</h3>
              <p className="text-sm leading-relaxed">
                Queen-size bed with premium linens and dresser. Features a professional workspace 
                with <strong>3 mounted monitors</strong>, keyboard, and mouse. USB-C docking station 
                lets you connect your laptop with a single cable - your laptop can stay closed! 
                <span className="text-book-accent font-semibold"> Note: May require DisplayLink Manager driver installation for full functionality.</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-book-accent mb-2">Outdoor Space</h3>
              <p className="text-sm leading-relaxed">
                Private, <strong>fenced-in backyard</strong> with covered porch and outdoor furniture. 
                Fire up the Weber grill for a barbecue or enjoy your morning coffee outside. 
                Perfect for outdoor dining, entertaining, or simply unwinding in your own private oasis.
              </p>
            </div>
          </div>
        </div>

        {/* Complete Amenities List */}
        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4">
            Complete Amenities List
          </h2>
          <div className="grid md:grid-cols-2 gap-6 font-sans text-sm">
            <div>
              <h4 className="font-semibold text-book-accent mb-2">3 Season Room</h4>
              <ul className="space-y-1 text-book-text">
                {amenities.threeSeasonRoom.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">Kitchen</h4>
              <ul className="space-y-1 text-book-text">
                {amenities.kitchen.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">Bathroom</h4>
              <ul className="space-y-1 text-book-text">
                {amenities.bathroom.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">Main Bedroom</h4>
              <ul className="space-y-1 text-book-text">
                {amenities.mainBedroom.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">Spare Bedroom</h4>
              <ul className="space-y-1 text-book-text">
                {amenities.spareBedroom.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">Outdoor Space</h4>
              <ul className="space-y-1 text-book-text">
                {amenities.outdoor.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">Other</h4>
              <ul className="space-y-1 text-book-text">
                {amenities.other.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Note */}
        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6">
          <p className="text-book-cover font-sans text-sm text-center">
            Need more details about amenities and how to use appliances?<br />
            <button 
              onClick={() => goToPage(3)}
              className="text-book-accent font-semibold underline hover:no-underline mt-2 inline-block"
            >
              Check the House Guide →
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}


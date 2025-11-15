import { Utensils, Coffee, MapPin, DollarSign, Phone, ExternalLink, Star } from 'lucide-react'
import { restaurants, groceries } from '@/data/content'

export default function LocalEats({ goToPage }: { goToPage: (page: number) => void }) {
  const categories = [
    { key: 'upscale', title: 'Upscale Dining', icon: '🍽️', description: 'Special occasions and fine dining' },
    { key: 'casual', title: 'Pizza & Quick Bites', icon: '🍕', description: 'Fast, delicious, and affordable' },
    { key: 'asian', title: 'Sushi & Chinese', icon: '🍱', description: 'Asian cuisine and fresh sushi' },
    { key: 'american', title: 'Wings, Sushi & American', icon: '🍗', description: 'Variety and favorites' }
  ]

  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-book-cover mb-6">
          Where to Eat
        </h1>
        <div className="w-24 h-1 bg-book-accent mb-8" />

        <p className="text-book-text font-serif text-lg mb-8 leading-relaxed">
          From upscale dining to quick bites, the North Shore has incredible food options! 
          Here are our top recommendations organized by style.
        </p>

        {/* Restaurant Categories */}
        {categories.map((category) => {
          const categoryRestaurants = restaurants[category.key as keyof typeof restaurants]
          return (
            <div key={category.key} className="mb-10">
              {/* Category Header */}
              <div className="mb-6 pb-3 border-b-2 border-book-accent">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-3xl font-serif font-bold text-book-cover">
                    {category.title}
                  </h2>
                </div>
                <p className="text-book-accent font-sans text-sm ml-12">
                  {category.description}
                </p>
              </div>

              {/* Restaurant Cards */}
              <div className="space-y-4">
                {categoryRestaurants.map((restaurant: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-5 border-l-4 border-book-accent">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-book-accent bg-opacity-10 rounded-lg">
                        <Utensils className="text-book-accent" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                          <h3 className="text-xl font-serif font-semibold text-book-cover">
                            {restaurant.name}
                          </h3>
                          <span className="text-book-accent font-sans font-bold text-lg">
                            {restaurant.priceRange}
                          </span>
                        </div>
                        
                        <p className="text-book-accent font-sans text-sm font-medium mb-2">
                          {restaurant.type}
                        </p>
                        
                        <p className="text-book-text font-sans text-sm leading-relaxed mb-3">
                          {restaurant.description}
                        </p>

                        {/* Highlight/Special Note */}
                        {restaurant.highlight && (
                          <div className="bg-book-page border-l-4 border-book-accent rounded p-3 mb-3">
                            <div className="flex items-center gap-2">
                              <Star className="text-book-accent" size={16} />
                              <p className="text-book-cover font-sans text-sm font-semibold">
                                {restaurant.highlight}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Location, Phone, Website */}
                        <div className="flex flex-wrap gap-4 text-book-accent font-sans text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{restaurant.distance}</span>
                          </div>
                          {restaurant.phone && (
                            <a 
                              href={`tel:${restaurant.phone}`}
                              className="flex items-center gap-2 hover:text-book-cover transition-colors"
                            >
                              <Phone size={14} />
                              <span>{restaurant.phone}</span>
                            </a>
                          )}
                          {restaurant.url && (
                            <a 
                              href={restaurant.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 hover:text-book-cover transition-colors font-semibold"
                            >
                              <ExternalLink size={14} />
                              <span>Visit Website</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Price Guide */}
        
        {/* Groceries & Markets */}
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-semibold text-book-cover mb-3">Groceries & Markets</h3>
          <ul className="list-none space-y-3 text-sm">
            {groceries.map((g: any) => (
              <li key={g.name} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-book-accent">
                <div className="flex items-start justify-between">
                  <div>
                    <a href={g.url} target="_blank" rel="noreferrer" className="text-book-accent font-semibold">
                      {g.name}
                    </a>
                    <div className="text-book-text text-xs">{g.address} • {g.phone}</div>
                    {g.note && <div className="text-xs italic opacity-80 mt-1">{g.note}</div>}
                  </div>
                  <div className="text-sm text-book-accent flex-shrink-0 ml-4">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-book-accent to-book-cover text-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign size={28} />
            <h3 className="text-2xl font-serif font-semibold">
              Price Guide
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
            <div className="bg-white bg-opacity-20 rounded p-3 backdrop-blur-sm">
              <span className="font-bold text-xl">$</span>
              <p className="text-sm mt-1">Under $15 per person</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-3 backdrop-blur-sm">
              <span className="font-bold text-xl">$$</span>
              <p className="text-sm mt-1">$15-30 per person</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-3 backdrop-blur-sm">
              <span className="font-bold text-xl">$$$</span>
              <p className="text-sm mt-1">$30+ per person</p>
            </div>
          </div>
        </div>

        {/* Local Tips */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="text-book-accent" size={24} />
            <h3 className="text-xl font-serif font-semibold text-book-cover">
              Local Dining Tips
            </h3>
          </div>
          <ul className="space-y-2 font-sans text-sm text-book-text">
            <li className="flex gap-2">
              <span className="text-book-accent font-bold">•</span>
              <span><strong>Reservations:</strong> Highly recommended for upscale spots on weekends</span>
            </li>
            <li className="flex gap-2">
              <span className="text-book-accent font-bold">•</span>
              <span><strong>North Shore Specialty:</strong> Don't leave without trying the famous roast beef!</span>
            </li>
            <li className="flex gap-2">
              <span className="text-book-accent font-bold">•</span>
              <span><strong>Takeout:</strong> Most restaurants offer takeout - perfect for enjoying on the porch</span>
            </li>
            <li className="flex gap-2">
              <span className="text-book-accent font-bold">•</span>
              <span><strong>Delivery:</strong> Many places deliver or are on DoorDash/Uber Eats</span>
            </li>
            <li className="flex gap-2">
              <span className="text-book-accent font-bold">•</span>
              <span><strong>Dietary needs:</strong> Most restaurants accommodate restrictions - just ask!</span>
            </li>
          </ul>
        </div>

        {/* Need More Options */}
        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6 text-center">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">
            Looking for More Options?
          </h3>
          <p className="text-book-text font-sans text-sm leading-relaxed mb-4">
            The North Shore has tons of great restaurants! Check out nearby Lynnfield's MarketStreet 
            for even more dining options including chain restaurants and additional local favorites.
          </p>
          <a 
            href="https://www.tripadvisor.com/RestaurantsNear-g41652-d5574502-MarketStreet_Lynnfield-Lynnfield_Massachusetts.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-book-accent text-white px-6 py-3 rounded-lg font-sans font-semibold hover:bg-book-cover transition-all shadow-md"
          >
            <ExternalLink size={18} />
            Browse Lynnfield Restaurants
          </a>
        </div>
      </div>
    </div>
  )
}

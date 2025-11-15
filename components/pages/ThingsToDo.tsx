import { MapPin, Calendar, Bike, ShoppingBag, Camera, Music } from 'lucide-react'
import { activities } from '@/data/content'

const categoryIcons = [
  { icon: ShoppingBag, label: 'Shopping & Entertainment' },
  { icon: Bike, label: 'Outdoor & Recreation' },
  { icon: Camera, label: 'Arts & Culture' },
  { icon: Calendar, label: 'Events & Markets' },
]

export default function ThingsToDo({ goToPage }: { goToPage: (page: number) => void }) {
  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-book-cover mb-6">
          Things to Do
        </h1>
        <div className="w-24 h-1 bg-book-accent mb-8" />

        <p className="text-book-text font-serif text-lg mb-8 leading-relaxed">
          Whether you're looking for adventure, relaxation, or culture, our neighborhood 
          has something for everyone. Here are our top recommendations!
        </p>

        {/* Top Attractions */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4">
            Top Attractions
          </h2>
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-book-accent bg-opacity-10 rounded-lg">
                    <MapPin className="text-book-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                      {activity.name}
                    </h3>
                    <p className="text-book-text font-sans text-sm leading-relaxed mb-3">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 text-book-accent font-sans text-sm">
                      <MapPin size={14} />
                      <span>{activity.distance} away</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4">
            Explore by Category
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {categoryIcons.map((category, idx) => {
              const Icon = category.icon
              return (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all">
                  <Icon className="text-book-accent mx-auto mb-3" size={36} strokeWidth={1.5} />
                  <h3 className="font-sans font-semibold text-book-cover">
                    {category.label}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>

        {/* Seasonal Activities */}
        <div className="bg-gradient-to-br from-book-accent to-book-cover text-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar size={28} />
            <h2 className="text-2xl font-serif font-semibold">
              Seasonal Highlights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 font-sans text-sm">
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h4 className="font-semibold mb-2">Spring/Summer</h4>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Outdoor concerts in the park</li>
                <li>• Farmers markets</li>
                <li>• Hiking and biking trails</li>
                <li>• Outdoor dining patios</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h4 className="font-semibold mb-2">Fall/Winter</h4>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Holiday markets and festivals</li>
                <li>• Museum exhibitions</li>
                <li>• Cozy cafes and bookshops</li>
                <li>• Indoor entertainment venues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transportation Tips */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">
            Getting Around
          </h3>
          <div className="space-y-3 font-sans text-sm text-book-text">
            <div className="flex gap-3">
              <span className="text-book-accent font-semibold">Walking:</span>
              <span>Most attractions within 1-2 miles are walkable. Sidewalks are pedestrian-friendly!</span>
            </div>
            <div className="flex gap-3">
              <span className="text-book-accent font-semibold">Driving:</span>
              <span>Free street parking available in most areas. Downtown has paid parking garages.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-book-accent font-semibold">Rideshare:</span>
              <span>Uber and Lyft readily available. Typical wait time: 5-10 minutes.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-book-accent font-semibold">Public Transit:</span>
              <span>Bus stop 2 blocks away. Routes run every 20-30 minutes.</span>
            </div>
          </div>
        </div>

        {/* Hidden Gems */}
        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">
            Local's Secret Spots 🤫
          </h3>
          <ul className="space-y-2 font-sans text-sm text-book-text">
            <li className="flex gap-2">
              <span className="text-book-accent">•</span>
              <span>The vintage bookstore on Oak Street has a hidden reading nook upstairs</span>
            </li>
            <li className="flex gap-2">
              <span className="text-book-accent">•</span>
              <span>Best sunset view is from the hill behind the library</span>
            </li>
            <li className="flex gap-2">
              <span className="text-book-accent">•</span>
              <span>Wednesday jazz nights at The Blue Door (cover charge $5)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-book-accent">•</span>
              <span>Early morning walks to the creek are magical - watch for herons!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


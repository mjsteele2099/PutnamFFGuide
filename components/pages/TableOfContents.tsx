import { Home, BookOpen, Utensils, MapPin, AlertCircle, FileText, LogOut } from 'lucide-react'

const sections = [
  { id: 2, title: 'About the Unit', icon: Home, description: 'Layout, amenities, and features' },
  { id: 3, title: 'House Guide', icon: BookOpen, description: 'WiFi, appliances, and how-tos' },
  { id: 4, title: 'Where to Eat', icon: Utensils, description: 'Local restaurants and cafes' },
  { id: 5, title: 'Things to Do', icon: MapPin, description: 'Activities and attractions' },
  { id: 6, title: 'Emergency Information', icon: AlertCircle, description: 'Important contacts' },
  { id: 7, title: 'House Rules', icon: FileText, description: 'Guidelines for your stay' },
  { id: 8, title: 'Check-out Instructions', icon: LogOut, description: 'Before you leave' },
]

export default function TableOfContents({ goToPage }: { goToPage: (page: number) => void }) {
  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-book-cover mb-4">
            Table of Contents
          </h1>
          <div className="w-24 h-1 bg-book-accent mx-auto mb-4" />
          <p className="text-book-accent font-sans">
            Click any section to jump directly to it
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => goToPage(section.id)}
                className="w-full flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-book-accent hover:border-book-cover group"
              >
                <div className="flex-shrink-0 p-3 bg-book-accent bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all">
                  <Icon className="text-book-accent" size={24} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-serif font-semibold text-book-cover mb-1">
                    {section.title}
                  </h3>
                  <p className="text-book-accent font-sans text-sm">
                    {section.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-book-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-sans text-sm">Page {section.id + 1}</span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-book-accent bg-opacity-10 rounded-lg text-center">
          <p className="text-book-cover font-sans text-sm leading-relaxed">
            <strong>Tip:</strong> Use the arrow buttons at the bottom to navigate page by page,
            or use your keyboard arrow keys for quick navigation.
          </p>
        </div>
      </div>
    </div>
  )
}


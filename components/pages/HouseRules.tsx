import { FileText, Clock, Volume2, Users, Cigarette, PartyPopper, Key, Info } from 'lucide-react'
import { houseRules, propertyInfo } from '@/data/content'

const ruleCategories = [
  {
    icon: Clock,
    title: 'Check-in & Check-out',
    rules: [
      'Check-in time: 3:00 PM (early check-in may be available - please ask!)',
      'Check-out time: 11:00 AM (late checkout available upon request)',
      'Please text upon arrival and departure'
    ]
  },
  {
    icon: Volume2,
    title: 'Quiet Hours',
    rules: [
      'Quiet hours: 10:00 PM - 8:00 AM',
      'Please be respectful of neighbors',
      'Keep music and TV at reasonable volumes',
      'Close windows if playing music in the evening'
    ]
  },
  {
    icon: Users,
    title: 'Guests & Occupancy',
    rules: [
      'Maximum occupancy: 4 guests',
      'Registered guests only - no unregistered overnight visitors',
      'Day visitors are welcome but please inform host',
      'All guests must be listed on the reservation'
    ]
  },
  {
    icon: Cigarette,
    title: 'No Smoking Policy',
    rules: [
      'Absolutely no smoking anywhere on the property',
      'This includes cigarettes, vaping, and marijuana',
      'Designated smoking area: None',
      'Violation may result in $250 cleaning fee'
    ]
  },
  {
    icon: PartyPopper,
    title: 'Events & Parties',
    rules: [
      'No parties or large gatherings allowed',
      'Small dinner gatherings (up to 4 people) are fine',
      'Please keep noise levels considerate',
      'Commercial events and filming require prior approval'
    ]
  }
]

export default function HouseRules({ goToPage }: { goToPage: (page: number) => void }) {
  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="text-book-accent" size={40} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-book-cover">
            House Rules
          </h1>
        </div>
        <div className="w-24 h-1 bg-book-accent mb-8" />

        <p className="text-book-text font-serif text-lg mb-8 leading-relaxed">
          To ensure a pleasant stay for everyone, we kindly ask all guests to follow these 
          house rules. Thank you for your cooperation!
        </p>

        {/* Detailed Rules by Category */}
        <div className="space-y-6 mb-8">
          {ruleCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-book-accent bg-opacity-10 rounded-lg">
                    <Icon className="text-book-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-book-cover">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2 font-sans text-sm text-book-text">
                  {category.rules.map((rule, ruleIdx) => (
                    <li key={ruleIdx} className="flex gap-2">
                      <span className="text-book-accent">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Additional Guidelines */}
        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Info className="text-book-accent" size={24} />
            <h3 className="text-xl font-serif font-semibold text-book-cover">
              Additional Guidelines
            </h3>
          </div>
          <div className="space-y-3 font-sans text-sm text-book-text">
            <div className="flex gap-2">
              <span className="text-book-accent font-semibold">Shoes:</span>
              <span>Please remove shoes at the entrance to help keep the space clean</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent font-semibold">Pets:</span>
              <span>Sorry, no pets allowed (service animals welcome with advance notice)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent font-semibold">Parking:</span>
              <span>One designated parking space. Additional street parking available</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent font-semibold">Keys:</span>
              <span>Do not duplicate keys. Lost keys subject to $50 replacement fee</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent font-semibold">Trash:</span>
              <span>Please take out trash if bins are full. Bins located outside back door</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent font-semibold">Dishes:</span>
              <span>Please wash or place in dishwasher after use</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent font-semibold">Thermostat:</span>
              <span>Please keep between 68-76°F for energy efficiency</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent font-semibold">Security:</span>
              <span>Always lock doors when leaving. Close all windows if you'll be out for extended periods</span>
            </div>
          </div>
        </div>

        {/* Respect & Communication */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">
            Respectful Communication
          </h3>
          <p className="text-book-text font-sans text-sm leading-relaxed mb-3">
            We want you to feel at home! If something isn't working, if you need something, 
            or if you have any concerns, please don't hesitate to reach out. We're here to 
            help make your stay comfortable.
          </p>
          <p className="text-book-accent font-sans text-sm">
            <strong>Questions or concerns?</strong> Text or call anytime: {propertyInfo.host.phone}
          </p>
        </div>

        {/* Violation Policy */}
        <div className="bg-book-page border-2 border-book-accent rounded-lg p-6">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">
            Important: Violations
          </h3>
          <p className="text-book-text font-sans text-sm leading-relaxed">
            Serious violations of house rules (smoking, unauthorized parties, property damage, 
            or excessive noise complaints) may result in immediate termination of your stay 
            without refund. We trust this won't be necessary and appreciate your cooperation!
          </p>
        </div>

        {/* Thank You Note */}
        <div className="mt-8 text-center p-6 bg-gradient-to-br from-book-accent to-book-cover text-white rounded-lg">
          <p className="font-serif text-lg mb-2">
            Thank you for respecting our home!
          </p>
          <p className="font-sans text-sm opacity-90">
            Following these simple guidelines ensures a great experience for everyone
          </p>
        </div>
      </div>
    </div>
  )
}


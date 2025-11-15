import { LogOut, CheckCircle, Clock, Heart } from 'lucide-react'
import { checkoutInstructions, propertyInfo } from '@/data/content'

export default function CheckoutPage({ goToPage }: { goToPage: (page: number) => void }) {
  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <LogOut className="text-book-accent" size={40} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-book-cover">
            Check-out Instructions
          </h1>
        </div>
        <div className="w-24 h-1 bg-book-accent mb-8" />

        {/* Checkout Time */}
        <div className="mb-8 bg-gradient-to-br from-book-accent to-book-cover text-white rounded-lg shadow-lg p-6 text-center">
          <Clock size={48} className="mx-auto mb-3 opacity-90" />
          <h2 className="text-3xl font-serif font-bold mb-2">
            Check-out: 11:00 AM
          </h2>
          <p className="text-sm opacity-90 font-sans">
            Need more time? Text us - late checkout may be available!
          </p>
        </div>

        <p className="text-book-text font-serif text-lg mb-8 leading-relaxed text-center">
          We hope you had a wonderful stay! Please complete these simple steps before you leave.
        </p>

        {/* Checklist */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4 flex items-center gap-2">
            <CheckCircle className="text-book-accent" size={28} />
            Check-out Checklist
          </h2>
          <div className="space-y-4">
            {checkoutInstructions.map((instruction, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-book-accent bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-book-accent text-white flex items-center justify-center font-sans font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="flex-1 text-book-text font-sans pt-1">
                  {instruction}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What to Leave Behind */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-4">
            Please Leave Behind
          </h3>
          <div className="grid md:grid-cols-2 gap-4 font-sans text-sm text-book-text">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-book-accent">✓</span>
                <span>All keys in the lockbox</span>
              </div>
              <div className="flex gap-2">
                <span className="text-book-accent">✓</span>
                <span>Remote controls on coffee table</span>
              </div>
              <div className="flex gap-2">
                <span className="text-book-accent">✓</span>
                <span>Towels in bathroom laundry basket</span>
              </div>
              <div className="flex gap-2">
                <span className="text-book-accent">✓</span>
                <span>Kitchen clean and dishes done</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-book-accent">✓</span>
                <span>All lights turned off</span>
              </div>
              <div className="flex gap-2">
                <span className="text-book-accent">✓</span>
                <span>Thermostat set to 68°F</span>
              </div>
              <div className="flex gap-2">
                <span className="text-book-accent">✓</span>
                <span>All windows and doors locked</span>
              </div>
              <div className="flex gap-2">
                <span className="text-book-accent">✓</span>
                <span>Trash taken out if full</span>
              </div>
            </div>
          </div>
        </div>

        {/* What Not to Worry About */}
        <div className="mb-8 bg-book-accent bg-opacity-10 rounded-lg p-6">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">
            Don't Worry About
          </h3>
          <p className="text-book-text font-sans text-sm mb-3">
            You're on vacation - we've got these covered:
          </p>
          <div className="grid md:grid-cols-2 gap-3 font-sans text-sm text-book-text">
            <div className="flex gap-2">
              <span className="text-book-accent">•</span>
              <span>Vacuuming or mopping</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent">•</span>
              <span>Deep cleaning bathroom</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent">•</span>
              <span>Washing linens and towels</span>
            </div>
            <div className="flex gap-2">
              <span className="text-book-accent">•</span>
              <span>Making the bed</span>
            </div>
          </div>
        </div>

        {/* Lost & Found */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">
            Forgot Something?
          </h3>
          <p className="text-book-text font-sans text-sm leading-relaxed">
            It happens! If you realize you left something behind, please contact us within 
            24 hours. We'll hold items for 30 days and can ship them to you (shipping costs 
            apply). Contact: <span className="text-book-accent font-semibold">{propertyInfo.host.email}</span>
          </p>
        </div>

        {/* Feedback Request */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">
            We'd Love Your Feedback!
          </h3>
          <p className="text-book-text font-sans text-sm leading-relaxed mb-4">
            Your review helps us improve and helps future guests. We appreciate honest feedback 
            and would be grateful if you could leave a review on the booking platform.
          </p>
          <p className="text-book-accent font-sans text-sm">
            Had an issue during your stay? Please let us know directly so we can make it right!
          </p>
        </div>

        {/* Final Thank You */}
        <div className="bg-gradient-to-br from-book-accent to-book-cover text-white rounded-lg shadow-lg p-8 text-center">
          <Heart size={48} className="mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-serif font-bold mb-3">
            Thank You for Staying!
          </h2>
          <p className="font-sans text-lg mb-4 opacity-90">
            We hope you had a wonderful time and made great memories.
          </p>
          <p className="font-sans text-sm opacity-80 mb-4">
            Safe travels, and we hope to host you again soon!
          </p>
          <div className="pt-4 border-t border-white border-opacity-30">
            <p className="font-sans text-sm">
              Questions? Text us: <span className="font-bold">{propertyInfo.host.phone}</span>
            </p>
          </div>
        </div>

        {/* Come Back Soon */}
        <div className="mt-8 text-center">
          <p className="text-book-accent font-serif italic text-lg">
            "Travel is the only thing you buy that makes you richer."
          </p>
        </div>
      </div>
    </div>
  )
}


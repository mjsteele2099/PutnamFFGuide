import { AlertCircle, Phone, MapPin, Activity } from 'lucide-react'
import { emergencyContacts, propertyInfo } from '@/data/content'

export default function EmergencyInfo({ goToPage }: { goToPage: (page: number) => void }) {
  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="text-book-accent" size={40} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-book-cover">
            Emergency Information
          </h1>
        </div>
        <div className="w-24 h-1 bg-book-accent mb-8" />

        {/* Emergency Contacts */}
        <div className="mb-8 bg-book-page border-2 border-book-accent rounded-lg p-6">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4 flex items-center gap-2">
            <Phone size={24} />
            Emergency Contacts
          </h2>
          <div className="space-y-3">
            {emergencyContacts.map((contact, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-book-cover text-lg">
                      {contact.name}
                    </h3>
                    {contact.address && (
                      <p className="text-book-accent font-sans text-sm mt-1">
                        {contact.address}
                      </p>
                    )}
                  </div>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="bg-book-accent text-white px-4 py-2 rounded font-sans font-semibold hover:bg-book-cover transition-all"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Property Info */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4 flex items-center gap-2">
            <MapPin size={24} className="text-book-accent" />
            Property Address
          </h2>
          <div className="bg-book-accent bg-opacity-10 rounded p-4 font-sans">
            <p className="text-lg font-semibold text-book-cover mb-1">
              {propertyInfo.name}
            </p>
            <p className="text-book-text">
              {propertyInfo.address}<br />
              {propertyInfo.city}
            </p>
            <p className="text-book-accent text-sm mt-3">
              Share this address with emergency services if needed
            </p>
          </div>
        </div>

        {/* Safety Equipment Locations */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4 flex items-center gap-2">
            <Activity size={24} className="text-book-accent" />
            Safety Equipment
          </h2>
          <div className="space-y-4 font-sans text-sm">
            <div className="flex items-start gap-3 p-3 bg-book-accent bg-opacity-10 rounded">
              <span className="text-2xl">🔥</span>
              <div>
                <h4 className="font-semibold text-book-cover mb-1">Fire Extinguisher</h4>
                <p className="text-book-text">Located in the kitchen under the sink</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-book-accent bg-opacity-10 rounded">
              <span className="text-2xl">🚨</span>
              <div>
                <h4 className="font-semibold text-book-cover mb-1">Smoke & CO Detectors</h4>
                <p className="text-book-text">Installed in bedroom, living area, and hallway</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-book-accent bg-opacity-10 rounded">
              <span className="text-2xl">🚪</span>
              <div>
                <h4 className="font-semibold text-book-cover mb-1">Emergency Exit</h4>
                <p className="text-book-text">Main entrance (front door) and back door near kitchen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Utility Shut-offs */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4">
            Utility Shut-offs
          </h2>
          <div className="space-y-3 font-sans text-sm text-book-text">
            <div className="flex gap-3">
              <span className="font-semibold text-book-accent min-w-[100px]">Water:</span>
              <span>Main shut-off valve in utility closet, labeled with red tag</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-book-accent min-w-[100px]">Electricity:</span>
              <span>Circuit breaker panel in hallway closet</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-book-accent min-w-[100px]">Gas:</span>
              <span>If you smell gas, evacuate immediately and call 911. Do not attempt to shut off.</span>
            </div>
          </div>
        </div>

        {/* What to Do in Common Emergencies */}
        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6">
          <h2 className="text-2xl font-serif font-semibold text-book-cover mb-4">
            Common Emergency Procedures
          </h2>
          <div className="space-y-4 font-sans text-sm">
            <div>
              <h4 className="font-semibold text-book-accent mb-2">🔥 Fire</h4>
              <p className="text-book-text">
                Evacuate immediately. Call 911 from a safe location. Do not re-enter the building.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">💧 Water Leak</h4>
              <p className="text-book-text">
                Shut off main water valve in utility closet. Contact host immediately at {propertyInfo.host.phone}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">🔒 Locked Out</h4>
              <p className="text-book-text">
                Contact host at {propertyInfo.host.phone}. Backup key location will be provided.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-book-accent mb-2">🏥 Medical Emergency</h4>
              <p className="text-book-text">
                Call 911 for serious emergencies. Property address: {propertyInfo.address}, {propertyInfo.city}
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact Card */}
        <div className="mt-8 bg-gradient-to-br from-book-accent to-book-cover text-white rounded-lg p-6 text-center">
          <p className="font-sans text-lg mb-2">
            <strong>24/7 Host Contact</strong>
          </p>
          <p className="text-3xl font-bold mb-2">
            {propertyInfo.host.phone}
          </p>
          <p className="text-sm opacity-90">
            Don't hesitate to reach out for any concerns
          </p>
        </div>
      </div>
    </div>
  )
}


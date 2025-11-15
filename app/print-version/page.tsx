'use client'

import { useEffect } from 'react'
import { propertyInfo, emergencyContacts, houseRules, amenities, restaurants, activities, checkoutInstructions } from '@/data/content'

export default function PrintVersion() {
  useEffect(() => {
    // Add print-specific styles
    document.body.classList.add('print-version')
  }, [])

  return (
    <div className="print-container max-w-4xl mx-auto p-8 bg-white">
      {/* Print Button */}
      <div className="no-print mb-8 text-center">
        <button
          onClick={() => window.print()}
          className="bg-book-accent text-white px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:bg-book-cover transition-all shadow-lg"
        >
          📄 Save as PDF / Print
        </button>
        <p className="text-book-accent text-sm mt-3">
          Click the button above, then choose "Save as PDF" in the print dialog
        </p>
        <a href="/" className="text-book-accent underline text-sm block mt-2">
          ← Back to Interactive Guide
        </a>
      </div>

      {/* Cover Page */}
      <div className="page-break text-center py-20">
        <h1 className="text-6xl font-serif font-bold text-book-cover mb-4">Welcome</h1>
        <p className="text-3xl font-serif italic text-book-accent mb-8">Guest Guide</p>
        <div className="w-32 h-1 bg-book-accent mx-auto mb-8"></div>
        <p className="text-xl text-book-text">Your home away from home</p>
        <p className="text-book-accent mt-4">Everything you need to know</p>
      </div>

      {/* Table of Contents */}
      <div className="page-break">
        <h2 className="text-4xl font-serif font-bold text-book-cover mb-6 border-b-2 border-book-accent pb-2">
          Table of Contents
        </h2>
        <ul className="space-y-2 text-lg">
          <li>1. About the Unit ........................... Page 3</li>
          <li>2. House Guide ............................. Page 4</li>
          <li>3. Where to Eat ............................ Page 6</li>
          <li>4. Things to Do ............................ Page 8</li>
          <li>5. Emergency Information .................... Page 9</li>
          <li>6. House Rules ............................. Page 10</li>
          <li>7. Check-out Instructions .................. Page 11</li>
        </ul>
      </div>

      {/* About the Unit */}
      <div className="page-break">
        <h2 className="text-4xl font-serif font-bold text-book-cover mb-6 border-b-2 border-book-accent pb-2">
          About the Unit
        </h2>
        
        <p className="text-lg mb-6 leading-relaxed">
          Welcome to your home away from home! This thoughtfully designed unit offers everything you need for a comfortable stay. 
          Enjoy indoor comfort with two bedrooms, a fully equipped kitchen, and a spacious 3 season room. Step outside to your 
          private, fenced-in backyard with porch, outdoor furniture, and Weber grill - perfect for relaxing or entertaining!
        </p>

        <h3 className="text-2xl font-serif font-semibold text-book-cover mb-4 mt-6">The Space</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-book-accent mb-1">3 Season Room</h4>
            <p className="text-sm">Welcome! This bright and airy 3 season room is perfect for enjoying meals, sipping your morning coffee, or simply relaxing.</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Kitchen</h4>
            <p className="text-sm">Fully equipped with full-size appliances, cookware, and dishes. Coffee maker with complimentary pods.</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Bathroom</h4>
            <p className="text-sm">Private bathroom with shower, fresh towels, hair dryer, and basic toiletries.</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Main Bedroom</h4>
            <p className="text-sm">Queen-size bed with premium linens, dresser, and smart TV with streaming services.</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Spare Bedroom (Office Setup)</h4>
            <p className="text-sm">Queen-size bed with dresser. Features a professional workspace with 3 mounted monitors, keyboard, and mouse. USB-C docking station.</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Outdoor Space</h4>
            <p className="text-sm">Private, fenced-in backyard with covered porch and outdoor furniture. Weber grill for barbecuing.</p>
          </div>
        </div>

        <h3 className="text-2xl font-serif font-semibold text-book-cover mb-4 mt-6">Complete Amenities</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(amenities).map(([room, items]) => (
            <div key={room}>
              <h4 className="font-semibold text-book-accent mb-2 capitalize">
                {room.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <ul className="space-y-1">
                {(items as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* House Guide - WiFi */}
      <div className="page-break">
        <h2 className="text-4xl font-serif font-bold text-book-cover mb-6 border-b-2 border-book-accent pb-2">
          House Guide
        </h2>

        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-serif font-semibold text-book-cover mb-4">WiFi Connection</h3>
          <div className="space-y-2">
            <p><strong>Network:</strong> <span className="font-mono text-lg">{propertyInfo.wifi.network}</span></p>
            <p><strong>Password:</strong> <span className="font-mono text-lg">{propertyInfo.wifi.password}</span></p>
          </div>
        </div>

        <h3 className="text-2xl font-serif font-semibold text-book-cover mb-4">Getting In</h3>
        <div className="mb-6">
          <h4 className="font-semibold text-book-accent mb-2">Option 1: August App</h4>
          <ul className="text-sm space-y-1 mb-4 list-disc list-inside">
            <li>Download the "August" app from App Store or Google Play</li>
            <li>You'll receive an invite before your stay</li>
            <li>Access active for your reservation dates only</li>
            <li>⚠️ When locking, pull the door toward you slightly</li>
          </ul>
          
          <h4 className="font-semibold text-book-accent mb-2">Option 2: Lockbox</h4>
          <p className="text-sm mb-2">Lockbox on fence to the LEFT of front door</p>
          <p className="text-sm"><strong>Code: 2615</strong> (last 4 digits of your phone number)</p>
        </div>

        <h3 className="text-2xl font-serif font-semibold text-book-cover mb-4">Parking & Entry</h3>
        <ul className="text-sm space-y-2 list-disc list-inside mb-6">
          <li><strong>Park:</strong> LEFT side of house (longer driveway) - 2 spaces</li>
          <li><strong>Your Entry:</strong> RIGHT side of house (NOT the front door)</li>
          <li>Front door is for upstairs tenants</li>
        </ul>

        <h3 className="text-2xl font-serif font-semibold text-book-cover mb-4">Key Appliances</h3>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Nest Thermostats (2 Units)</h4>
            <p>Twist clockwise to increase, counter-clockwise to decrease. Keep between 68-76°F.</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Living Room - LG Smart TV</h4>
            <p>Netflix, YouTube TV, Hulu, HBO Max available. Main LG remote controls TV and soundbar.</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Main Bedroom - Samsung TV with Fire Stick</h4>
            <p>Fire Stick remote on nightstand controls both.</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Coffee Makers</h4>
            <p><strong>Keurig (Recommended):</strong> Simple and easy. Pods provided.</p>
            <p><strong>DeLonghi Espresso:</strong> For experienced users only - can be tricky!</p>
          </div>
          <div>
            <h4 className="font-semibold text-book-accent mb-1">Trash & Recycling</h4>
            <p>Outside 3 season room. Green = trash, Blue = recycling. Pickup: Sunday.</p>
          </div>
        </div>
      </div>

      {/* Where to Eat */}
      <div className="page-break">
        <h2 className="text-4xl font-serif font-bold text-book-cover mb-6 border-b-2 border-book-accent pb-2">
          Where to Eat
        </h2>

        {Object.entries(restaurants).map(([category, places]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-serif font-semibold text-book-accent mb-3 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="space-y-3">
              {(places as any[]).map((restaurant, idx) => (
                <div key={idx} className="border-l-4 border-book-accent pl-3">
                  <h4 className="font-semibold text-book-cover">
                    {restaurant.name} <span className="text-book-accent">{restaurant.priceRange}</span>
                  </h4>
                  <p className="text-sm text-book-accent">{restaurant.type}</p>
                  <p className="text-sm">{restaurant.description}</p>
                  {restaurant.phone && <p className="text-sm">📞 {restaurant.phone}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-sm mt-6"><strong>Price Guide:</strong> $ = Under $15 | $$ = $15-30 | $$$ = $30+</p>
      </div>

      {/* Things to Do */}
      <div className="page-break">
        <h2 className="text-4xl font-serif font-bold text-book-cover mb-6 border-b-2 border-book-accent pb-2">
          Things to Do
        </h2>

        <div className="space-y-4">
          {activities.map((activity, idx) => (
            <div key={idx} className="border-l-4 border-book-accent pl-3">
              <h3 className="font-semibold text-book-cover">{activity.name}</h3>
              <p className="text-sm">{activity.description}</p>
              <p className="text-sm text-book-accent">{activity.distance}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Information */}
      <div className="page-break">
        <h2 className="text-4xl font-serif font-bold text-book-cover mb-6 border-b-2 border-book-accent pb-2">
          Emergency Information
        </h2>

        <div className="bg-book-page border-2 border-book-accent rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-serif font-semibold text-book-cover mb-4">Emergency Contacts</h3>
          <div className="space-y-3">
            {emergencyContacts.map((contact, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-book-accent pb-2">
                <div>
                  <p className="font-semibold">{contact.name}</p>
                  {contact.address && <p className="text-sm text-book-accent">{contact.address}</p>}
                </div>
                <p className="font-bold text-lg">{contact.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6">
          <h3 className="text-xl font-serif font-semibold text-book-cover mb-3">Property Address</h3>
          <p className="font-semibold">{propertyInfo.name}</p>
          <p>{propertyInfo.address}</p>
          <p>{propertyInfo.city}</p>
        </div>
      </div>

      {/* House Rules */}
      <div className="page-break">
        <h2 className="text-4xl font-serif font-bold text-book-cover mb-6 border-b-2 border-book-accent pb-2">
          House Rules
        </h2>

        <div className="space-y-2 mb-6">
          {houseRules.map((rule, idx) => (
            <p key={idx} className="text-sm">• {rule}</p>
          ))}
        </div>

        <div className="bg-book-page border-l-4 border-book-accent rounded p-4">
          <p className="text-sm"><strong>Questions?</strong> Call/text: {propertyInfo.host.phone}</p>
        </div>
      </div>

      {/* Check-out Instructions */}
      <div className="page-break">
        <h2 className="text-4xl font-serif font-bold text-book-cover mb-6 border-b-2 border-book-accent pb-2">
          Check-out Instructions
        </h2>

        <div className="bg-book-accent bg-opacity-10 rounded-lg p-6 mb-6 text-center">
          <p className="text-3xl font-serif font-bold mb-2">Check-out: 11:00 AM</p>
          <p className="text-sm">Need more time? Text us!</p>
        </div>

        <h3 className="text-2xl font-serif font-semibold text-book-cover mb-4">Check-out Checklist</h3>
        <div className="space-y-2 mb-6">
          {checkoutInstructions.map((instruction, idx) => (
            <p key={idx} className="text-sm flex gap-2">
              <span className="font-bold text-book-accent">{idx + 1}.</span>
              {instruction}
            </p>
          ))}
        </div>

        <div className="text-center mt-12 py-8 border-t-2 border-book-accent">
          <h3 className="text-3xl font-serif font-bold text-book-cover mb-4">Thank You for Staying!</h3>
          <p className="text-lg mb-4">We hope you had a wonderful time.</p>
          <p className="text-book-accent">Safe travels, and we hope to host you again soon!</p>
          <p className="mt-6"><strong>Questions?</strong> {propertyInfo.host.phone}</p>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-after: always;
            page-break-inside: avoid;
          }
          .print-container {
            margin: 0;
            padding: 20px;
          }
          body {
            background: white;
          }
        }
      `}</style>
    </div>
  )
}


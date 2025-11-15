import { Wifi, Coffee, Tv, Thermometer, Trash2, Key, Smartphone, Lock } from 'lucide-react'
import { propertyInfo, amenities } from '@/data/content'

export default function HouseGuide({ goToPage }: { goToPage: (page: number) => void }) {
  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-book-cover mb-6">
          House Guide
        </h1>
        <div className="w-24 h-1 bg-book-accent mb-8" />

        {/* Getting In - Entry Instructions */}
        <div className="mb-8 bg-gradient-to-br from-book-accent to-book-cover text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Key size={32} />
            <h2 className="text-3xl font-serif font-semibold">Getting In</h2>
          </div>
          <p className="text-lg mb-4 opacity-90">
            Two easy ways to access your home away from home!
          </p>

          {/* Entry Photos */}
          <div className="mb-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/Lock1.jpg" 
                alt="Entry area showing fence with lockbox and entry door" 
                className="w-full h-64 object-cover"
              />
              <p className="text-white text-xs text-center mt-2 opacity-80">
                View of entry area - lockbox on fence to the left
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/Lock2.jpg" 
                alt="Close-up of entry door with August smart lock" 
                className="w-full h-64 object-cover"
              />
              <p className="text-white text-xs text-center mt-2 opacity-80">
                Your entry door with August smart lock
              </p>
            </div>
          </div>

          {/* Option 1: August Smart Lock */}
          <div className="bg-white bg-opacity-20 rounded-lg p-5 mb-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white bg-opacity-30 rounded-full p-2">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold">Option 1: August App (Recommended)</h3>
            </div>
            <div className="space-y-3 text-sm">
              <p>
                <strong>What is August?</strong> August is a smart lock app that lets you unlock the door 
                from your phone - no physical key needed!
              </p>
              
              <div className="bg-white bg-opacity-20 rounded p-4 space-y-2">
                <p><strong>📱 Setup:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Download the "August" app from the App Store or Google Play</li>
                  <li>We'll send you an invite before your stay</li>
                  <li>Your access will be active for the dates of your reservation only</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 rounded p-4 space-y-2">
                <p><strong>🔓 How to Use:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Open the August app near the door</li>
                  <li>Tap the lock icon to unlock or lock</li>
                  <li>You'll see the door status: "Locked" 🔒 or "Unlocked" 🔓</li>
                  <li>The app shows if the door is open or closed</li>
                </ul>
              </div>

              <div className="bg-book-page text-book-text rounded p-4 border-l-4 border-book-accent">
                <p className="font-semibold mb-1">⚠️ Important Tip:</p>
                <p className="text-sm">
                  When locking with the app, <strong>pull the door toward you slightly</strong>. 
                  The deadbolt doesn't always align perfectly flush, and this helps ensure a secure lock!
                </p>
              </div>
            </div>
          </div>

          {/* Option 2: Lockbox */}
          <div className="bg-white bg-opacity-20 rounded-lg p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white bg-opacity-30 rounded-full p-2">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold">Option 2: Physical Key (Backup)</h3>
            </div>
            <div className="space-y-3 text-sm">
              <p>
                If you prefer a traditional key or need a backup, we've got you covered!
              </p>
              
              <div className="bg-white bg-opacity-20 rounded p-4 space-y-2">
                <p><strong>📍 Location:</strong> Lockbox mounted on the fence to the <strong>left</strong> of the front door</p>
                <p><strong>🔢 Lockbox Code:</strong></p>
                <div className="bg-white bg-opacity-30 rounded px-4 py-3 text-center">
                  <span className="text-3xl font-bold tracking-wider">Last four digits of your phone number</span>
                  <p className="text-xs mt-1 opacity-80">Use the last 4 digits of the phone number you provided when booking.</p>
                </div>
                <p className="text-xs opacity-90 italic">
                  📝 The lockbox contains a physical key to the house. Please return the key to the 
                  lockbox after each use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WiFi - Most Important */}
        <div className="mb-8 bg-book-accent text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Wifi size={32} />
            <h2 className="text-2xl font-serif font-semibold">WiFi Connection</h2>
          </div>
          <div className="space-y-2 font-sans">
            <div className="flex justify-between items-center bg-white bg-opacity-20 rounded p-3">
              <span className="font-semibold">Network:</span>
              <span className="font-mono bg-white bg-opacity-30 px-3 py-1 rounded text-lg">
                {propertyInfo.wifi.network}
              </span>
            </div>
            <div className="flex justify-between items-center bg-white bg-opacity-20 rounded p-3">
              <span className="font-semibold">Password:</span>
              <span className="font-mono bg-white bg-opacity-30 px-3 py-1 rounded text-lg">
                {propertyInfo.wifi.password}
              </span>
            </div>
            <p className="text-sm opacity-90 mt-3 italic">
              💡 The Nest thermostats and living room TV have been shared to this guest network, 
              so you can control them from your phone!
            </p>
          </div>
        </div>

        {/* Key Appliances & Systems */}
        <div className="space-y-6 mb-8">
          {/* Nest Thermostats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <Thermometer className="text-book-accent mt-1" size={24} />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Nest Thermostats (2 Units)
                </h3>
                <p className="text-book-text font-sans text-sm mb-3 leading-relaxed">
                  The unit has <strong>two Nest thermostats</strong> for optimal climate control. 
                  Both have been shared to your guest WiFi network!
                </p>
                <div className="bg-book-accent bg-opacity-10 rounded p-4 mb-3">
                  <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                    📱 Control from Your Phone:
                  </p>
                  <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                    <li>Both thermostats are connected to the PutnamGuest network</li>
                    <li>You should be able to control them from your phone once connected</li>
                    <li>If you have any access issues, just reach out!</li>
                  </ul>
                </div>
                <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                  🎛️ Manual Control:
                </p>
                <ul className="text-book-accent font-sans text-sm space-y-1 list-disc list-inside">
                  <li>Simply twist the Nest dial clockwise to increase temperature</li>
                  <li>Twist counter-clockwise to decrease temperature</li>
                  <li>The display will show you the current and target temperature</li>
                  <li>Please keep settings between 68-76°F for system efficiency</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Living Room TV */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <Tv className="text-book-accent mt-1" size={24} />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Living Room - LG Smart TV
                </h3>
                <p className="text-book-text font-sans text-sm mb-3 leading-relaxed">
                  Enjoy the LG Smart TV with pre-loaded streaming services! The TV is connected 
                  to the main network but has been shared to your guest network.
                </p>
                
                <div className="bg-book-accent bg-opacity-10 rounded p-4 mb-3">
                  <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                    📺 Available Streaming Services:
                  </p>
                  <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                    <li><strong>Netflix</strong> - Logged in with host account</li>
                    <li><strong>YouTube TV</strong> - Logged in with host account</li>
                    <li><strong>Hulu</strong> - Logged in with host account</li>
                    <li><strong>HBO Max</strong> - Logged in with host account</li>
                  </ul>
                  <p className="text-book-accent font-sans text-xs mt-2 italic">
                    💡 Feel free to use the existing accounts, or sign out and use your own!
                  </p>
                </div>

                <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                  🎮 Remotes:
                </p>
                <ul className="text-book-accent font-sans text-sm space-y-1 list-disc list-inside">
                  <li><strong>Main LG Remote:</strong> Controls both the TV and soundbar</li>
                  <li><strong>Soundbar Remote:</strong> Backup remote if you have any issues</li>
                  <li>Questions? Just reach out - we're happy to help!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Bedroom TV */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <Tv className="text-book-accent mt-1" size={24} />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Main Bedroom - Samsung TV with Fire Stick
                </h3>
                <p className="text-book-text font-sans text-sm mb-3 leading-relaxed">
                  The main bedroom features a Samsung TV with an Amazon Fire Stick for streaming.
                </p>
                <ul className="text-book-accent font-sans text-sm space-y-1 list-disc list-inside">
                  <li><strong>Fire Stick Remote:</strong> Located on the nightstand</li>
                  <li>This remote controls both the Fire Stick and the Samsung TV</li>
                  <li>Access all your favorite streaming apps through the Fire Stick</li>
                  <li>You can log into your personal streaming accounts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bathroom Essentials */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="text-book-accent mt-1 text-2xl">🚿</div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Bathroom Essentials & Supplies
                </h3>
                <p className="text-book-text font-sans text-sm mb-3 leading-relaxed">
                  We've stocked plenty of supplies so you don't run out!
                </p>
                <ul className="text-book-accent font-sans text-sm space-y-1 list-disc list-inside">
                  <li><strong>Toilet Paper:</strong> Extra rolls in the white bathroom drawers</li>
                  <li><strong>More supplies:</strong> Additional toilet paper and paper towels in the basement</li>
                  <li><strong>Bulk storage:</strong> Even more on the rack near the washer and dryer in the basement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kitchen Organization */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="text-book-accent mt-1 text-2xl">🍳</div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Kitchen Guide - Where to Find Everything
                </h3>
                <p className="text-book-text font-sans text-sm mb-4 leading-relaxed">
                  Everything has its place! Here's a complete guide to the kitchen layout:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-book-page rounded p-4">
                    <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                      🍳 Cooking Essentials:
                    </p>
                    <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                      <li><strong>Pots and pans:</strong> To the left of the oven</li>
                      <li><strong>Cutting boards, pizza stones, food trays:</strong> To the right of the oven</li>
                      <li><strong>Cooking oil & spices:</strong> Cabinets left and right of microwave (more spices on the right)</li>
                      <li><strong>Cooking tools:</strong> Second drawer to the right of the sink</li>
                    </ul>
                  </div>

                  <div className="bg-book-page rounded p-4">
                    <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                      🍽️ Dishes & Utensils:
                    </p>
                    <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                      <li><strong>Silverware:</strong> First drawer to the right of the sink</li>
                      <li><strong>Bigger cups & plastic cups:</strong> Cabinet to the right of the sink</li>
                    </ul>
                  </div>

                  <div className="bg-book-page rounded p-4">
                    <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                      🧼 Cleaning & Supplies:
                    </p>
                    <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                      <li><strong>Dishwasher pods:</strong> Under the sink</li>
                      <li><strong>Hand soap, dish soap, extra trash bags, cleaners:</strong> Under the sink</li>
                    </ul>
                  </div>

                  <div className="bg-book-page rounded p-4">
                    <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                      📦 Storage & Organization:
                    </p>
                    <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                      <li><strong>To the left of the fridge - First drawer:</strong> Extra dish towels</li>
                      <li><strong>To the left of the fridge - Second drawer:</strong> Square storage Snapware containers</li>
                      <li><strong>To the left of the fridge - Bottom drawer:</strong> Circle storage and extra plastic containers</li>
                    </ul>
                  </div>

                  <div className="bg-book-accent bg-opacity-10 rounded p-4">
                    <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                      🍿 Snacks & Extras:
                    </p>
                    <p className="text-book-text font-sans text-sm">
                      <strong>Plenty of storage to the right of the fridge</strong> - help yourself to any snacks you find! 
                      There aren't much, but you're welcome to what's there. Feel free to use this space for your own groceries too!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coffee Makers */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <Coffee className="text-book-accent mt-1" size={24} />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Coffee Makers (2 Options)
                </h3>
                <p className="text-book-text font-sans text-sm mb-3 leading-relaxed">
                  Start your morning right with two coffee options! We've provided coffee supplies.
                </p>
                
                <div className="bg-book-page border-l-4 border-book-accent rounded p-4 mb-3">
                  <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                    ☕ Option 1: Keurig (Recommended)
                  </p>
                  <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                    <li>Simple and easy to use</li>
                    <li>Add water to the reservoir</li>
                    <li>Insert K-cup pod and close lid</li>
                    <li>Press the brew button</li>
                    <li>Extra pods provided - help yourself!</li>
                  </ul>
                </div>

                <div className="bg-book-bg border-l-4 border-book-accent rounded p-4">
                  <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                    ☕ Option 2: DeLonghi Espresso Maker
                  </p>
                  <p className="text-book-text font-sans text-sm mb-2">
                    For espresso lovers! However, <strong className="text-book-cover">please note:</strong>
                  </p>
                  <div className="bg-book-page rounded p-3">
                    <p className="text-book-text font-sans text-xs leading-relaxed">
                      ⚠️ <strong>Fair Warning:</strong> This machine can be confusing and messy if you're 
                      not familiar with it. If you don't know how to use an espresso maker, we'd recommend 
                      sticking with the Keurig to avoid any frustration or mess!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work From Home Setup */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <Tv className="text-book-accent mt-1" size={24} />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Spare Bedroom - Professional Work Setup
                </h3>
                <p className="text-book-text font-sans text-sm mb-3 leading-relaxed">
                  Need to work remotely? The spare bedroom features a complete professional workspace!
                </p>
                
                <div className="bg-book-page border-l-4 border-book-accent rounded p-4 mb-3">
                  <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                    💻 Triple Monitor Setup:
                  </p>
                  <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                    <li><strong>3 mounted monitors</strong> for maximum productivity - use the largest you have to plug the HDMI cable to the computer</li>
                    <li>Keyboard and mouse provided</li>
                    <li><strong>USB-C docking station</strong> - just plug in your laptop with one cable</li>
                    <li>Your laptop can stay closed once connected - monitors, keyboard, and mouse will work automatically</li>
                  </ul>
                </div>

                <div className="bg-book-bg border-l-4 border-book-accent rounded p-4">
                  <p className="text-book-text font-sans text-sm">
                    <strong>⚠️ Driver Note:</strong> You may need to install the <strong>DisplayLink Manager driver</strong> 
                    for full functionality with all three monitors. Most systems will work right away, but if you have 
                    issues, this is typically the fix!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trash & Recycling */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <Trash2 className="text-book-accent mt-1" size={24} />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Trash & Recycling
                </h3>
                <p className="text-book-text font-sans text-sm mb-3 leading-relaxed">
                  Trash barrels are located right outside the 3 season room. Please separate recyclables!
                </p>
                <ul className="text-book-accent font-sans text-sm space-y-1 list-disc list-inside">
                  <li><strong>Green barrel:</strong> Regular trash</li>
                  <li><strong>Blue barrel:</strong> Recycling (paper, plastic, glass, metal)</li>
                  <li><strong>Pickup day:</strong> Sunday morning</li>
                  <li>Please take out trash if barrels are full</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Parking & Entry */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-3 mb-3">
              <Key className="text-book-accent mt-1" size={24} />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-book-cover mb-2">
                  Parking & Finding Your Unit
                </h3>
                <p className="text-book-text font-sans text-sm mb-3 leading-relaxed">
                  Important: The property has two driveways and two entrances. Make sure you're using the correct ones!
                </p>
                
                <div className="bg-book-page border-l-4 border-book-accent rounded p-4 mb-3">
                  <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                    🚗 Parking:
                  </p>
                  <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                    <li>Park on the <strong>LEFT side of the house</strong></li>
                    <li>This is the <strong>longer of the two driveways</strong></li>
                    <li>You'll have plenty of room for your vehicle(s)</li>
                  </ul>
                </div>

                <div className="bg-book-bg border-l-4 border-book-accent rounded p-4">
                  <p className="text-book-cover font-sans text-sm font-semibold mb-2">
                    🚪 Your Unit Entry:
                  </p>
                  <ul className="text-book-text font-sans text-sm space-y-1 list-disc list-inside">
                    <li><strong>Your entry:</strong> Right-hand side of the house</li>
                    <li><strong>NOT the front door</strong> - that's for upstairs tenants</li>
                    <li>Look for the August smart lock and lockbox on the right side</li>
                  </ul>
                </div>

                <p className="text-book-accent font-sans text-xs mt-3 italic">
                  💡 Tip: Park left, enter right!
                </p>
              </div>
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
              <h4 className="font-semibold text-book-accent mb-2">Spare Bedroom (Office)</h4>
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

        {/* Need Help */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-book-text font-sans text-sm">
            <strong>Can't find something or need help?</strong><br />
            Please text or call: <span className="text-book-accent font-semibold">{propertyInfo.host.phone}</span>
          </p>
        </div>
      </div>
    </div>
  )
}


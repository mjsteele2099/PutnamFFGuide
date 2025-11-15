export interface Page {
  id: string
  title: string
  content: React.ReactNode | string
  type: 'cover' | 'toc' | 'section' | 'checkout'
}

export const propertyInfo = {
  name: "Your Property Name",
  address: "123 Main Street",
  city: "Your City, State",
  host: {
    name: "Steele",
    phone: "(978) 500-2099",
    email: "host@example.com"
  },
  secondaryContact: {
    name: "Matt Steele",
    phone: "(508) 789-5265",
    relationship: "Secondary Contact"
  },
  wifi: {
    network: "PutnamGuest",
    password: "Furnished34"
  }
}

export const emergencyContacts = [
  { name: "Emergency Services", phone: "911" },
  { name: "Host (Steele)", phone: "(978) 500-2099" },
  { name: "Secondary Contact (Matt Steele)", phone: "(508) 789-5265" },
  { name: "Local Hospital", phone: "(978) 777-7000", address: "57 Highland Ave, Salem, MA" },
  { name: "Police (Non-Emergency)", phone: "(978) 774-1212" },
]

export const houseRules = [
  "Check-in time: 3:00 PM",
  "Check-out time: 11:00 AM",
  "No smoking anywhere on the property",
  "Respect quiet hours (10 PM - 8 AM)",
  "Maximum occupancy: 4 guests",
  "No parties or events",

]

export const amenities = {
  threeSeasonRoom: [
    "Coat hooks and shoe storage",
    "Dining table and seating",
    "Perfect for meals and morning coffee",
    "Comfortable year-round space"
  ],
  kitchen: [
    "Full-size refrigerator and freezer",
    "Stove and oven",
    "Microwave",
    "Coffee maker (pods provided)",
    "Air Fryer",
    "Basic cookware and dishes",
    "Dishwasher"
  ],
  bathroom: [
    "Fresh towels and linens",
    "Hair dryer",
    "Shampoo and body wash"
  ],
  mainBedroom: [
    "Queen-size bed with premium linens",
    "Dresser for your belongings",
    "Smart TV with streaming services",
    "Extra blankets in closet",
    "Hangers in closet",
    
  ],
  spareBedroom: [
    "Queen-size bed with premium linens",
    "Dresser for your belongings",
    "Dedicated workspace with desk",
    "Triple monitor setup (3 monitors mounted)",
    "Keyboard and mouse provided",
    "USB-C docking station (connect your laptop)",
    "Laptop stays closed when connected",
    "Iron and ironing board"
  ],
  outdoor: [
    "Fenced-in backyard",
    "Private porch with outdoor furniture",
    "Weber grill for barbecuing"
  ],
  other: [
    "High-speed WiFi throughout",
    "Air conditioning and heating",
    "Washer and dryer in basement - use the first 2 closest to stairs. tenants also use dryer at the moment ",
    "Free parking (2 spaces)",
    "Smoke and CO detectors",
    "Fire extinguisher",
  ]
}

export const restaurants = {
  upscale: [
    {
      name: "9 Elm American Bistro",
      type: "American Bistro",
      description: "Chic intimate dining in Danvers Square. Small bistro with warm atmosphere and thoughtfully crafted dishes",
      distance: "Danvers Square",
      priceRange: "$$$",
      url: "https://9elm.com/",
      phone: "(978) 774-9436"
    },
    {
      name: "I Pazzi",
      type: "Italian",
      description: "Upscale Italian dining with Executive Chef Tani Bleta. On the pricey side but very good!",
      distance: "51 High St, Danvers",
      priceRange: "$$$",
      url: "https://www.ipazzirestaurant.com/",
      phone: "(978) 777-1955"
    },
    {
      name: "Craft Beer Cellar & Kitchen",
      type: "American",
      description: "Craft beer selection with elevated pub fare",
      distance: "Danvers",
      priceRange: "$$",
      url: "https://craftdanvers.com/"
    },
    {
      name: "Berry Tavern",
      type: "American Tavern",
      description: "Classic tavern with great atmosphere",
      distance: "Nearby",
      priceRange: "$$",
      url: "https://www.berrytavern.com/"
    },
    {
      name: "Post 1917",
      type: "American",
      description: "Modern American dining",
      distance: "Hamilton",
      priceRange: "$$-$$$",
      url: "https://posthamilton.com/"
    },
    {
      name: "Maggie's Farm",
      type: "Farm-to-Table",
      description: "Fresh, locally-sourced ingredients",
      distance: "Middleton",
      priceRange: "$$",
      url: "https://www.maggiesfarmmiddleton.com/"
    }
  ],
  casual: [
    {
      name: "Salvo's Panini Pizzeria",
      type: "Pizza & Italian",
      description: "Hand-tossed pizzas and authentic Italian paninis. Dough prepared on site and cooked in brick-lined oven",
      distance: "11 Maple St, Danvers",
      priceRange: "$",
      url: "https://www.paninipizzeria.com/",
      phone: "(978) 774-6200"
    },
    {
      name: "North Shore Roast Beef",
      type: "Roast Beef & Subs",
      description: "Great North Shore roast beef and amazing buffalo chicken subs - a local favorite!",
      distance: "Danvers",
      priceRange: "$",
      url: "https://supremeroastbeef.azurewebsites.net/"
    },
    {
      name: "Gio's Roast Beef & Pizza",
      type: "Roast Beef & Pizza",
      description: "Famous roast beef and specialty subs. Try the Grand Slam - steak and cheese with buffalo chicken!",
      distance: "47 Elm St, Danvers",
      priceRange: "$",
      url: "https://giospizzadanvers.com/",
      phone: "(978) 539-8127",
      highlight: "Don't miss the Grand Slam sub!"
    }
  ],
  asian: [
    {
      name: "Gourmet Garden (Mandarin Danvers)",
      type: "Chinese & Sushi",
      description: "Extensive Chinese menu with fresh sushi bar. Great variety and quality",
      distance: "139 Endicott St, Danvers",
      priceRange: "$$",
      url: "https://www.gourmetgardendanversma.com/",
      phone: "(978) 774-8588"
    },
    {
      name: "Blu Karma",
      type: "Asian Fusion & Sushi",
      description: "Upscale Asian fusion and sushi. Pricey but worth it!",
      distance: "Danvers",
      priceRange: "$$$",
      url: "https://www.blukarmadanversma.com/"
    },
    {
      name: "88 Restaurant & Lounge",
      type: "Asian",
      description: "Modern Asian cuisine and cocktails",
      distance: "Danvers",
      priceRange: "$$",
      url: "https://www.eightyeightdanversma.com/"
    }
  ],
  american: [
    {
      name: "Hale Street Tavern",
      type: "Wings, Sushi & American",
      description: "Great wings, sushi bar, and classic American favorites",
      distance: "Beverly",
      priceRange: "$$",
      url: "https://www.hale-street.com/"
    },
    {
      name: "15 Walnut",
      type: "American & Sushi",
      description: "Same owners as Hale Street. Wings, sushi, and American cuisine",
      distance: "Nearby",
      priceRange: "$$",
      url: "https://www.15walnut.com/"
    }
  ]
}

export const activities = [
  {
    name: "Downtown District",
    description: "Shopping, galleries, and entertainment",
    distance: "1 mile"
  },
  {
    name: "City Park",
    description: "Walking trails, playground, and picnic areas",
    distance: "0.6 miles"
  },
  {
    name: "Historic Museum",
    description: "Local history and rotating exhibits",
    distance: "1.5 miles"
  },
  {
    name: "Farmers Market",
    description: "Every Saturday morning, fresh local produce",
    distance: "0.8 miles"
  },
]

export const checkoutInstructions = [
  "Strip the beds and place linens in the laundry basket",
  "Start the dishwasher if you used dishes",
  "Take out the trash and recycling to the bins outside",
  "Turn off all lights and adjust thermostat to 68°F",
  "Lock all windows and doors",
  "Return keys to the lockbox",
  "Text the host when you've left"
]


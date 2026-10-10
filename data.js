// ============================================================
// ALL DEMO CONTENT LIVES HERE. Edit freely, then refresh the page.
// Everything is sample data. Nothing is live.
// ============================================================

window.DATA = {
  // Working name shown in the header.
  appName: "Activitree",

  // The hour the demo pretends it is (0-23). null = use the phone's real clock.
  // Tip: set 15 for an afternoon demo so busyness looks interesting.
  demoHour: null,

  // ---- Activity types (the intro chips). id is used everywhere else. ----
  // icon = a name from the ICONS list in index.html. color = card and icon tint.
  activities: [
    { id: "ski",    name: "Skiing & snowboarding",   icon: "mountain-snow",       color: "#4f74a0" },
    { id: "hike",   name: "Hiking",                  icon: "footprints",          color: "#5f8455" },
    { id: "climb",  name: "Climbing",                icon: "mountain",            color: "#a8714a" },
    { id: "skate",  name: "Skating",                 icon: "snowflake",           color: "#4f93a8" },
    { id: "bike",   name: "Biking",                  icon: "bike",                color: "#7d8c43" },
    { id: "water",  name: "Water & lakes",           icon: "sailboat",            color: "#357690" },
    { id: "parks",  name: "Amusement & trampoline",  icon: "ferris-wheel",        color: "#98577f" },
    { id: "arcade", name: "Laser tag & arcades",     icon: "gamepad-2",           color: "#6656a0" },
    { id: "bowl",   name: "Bowling & mini golf",     icon: "circle-dot",          color: "#a85754" },
    { id: "sports", name: "Pickup sports",           icon: "volleyball",          color: "#b77f34" },
    { id: "events", name: "Concerts & events",       icon: "music",               color: "#85506f" },
    { id: "museum", name: "Museums & zoos",          icon: "landmark",            color: "#8c7849" },
    { id: "gym",    name: "Gyms & fitness",          icon: "dumbbell",            color: "#56606b" },
    { id: "golf",   name: "Golf",                    icon: "flag-triangle-right", color: "#3f8a5f" },
  ],

  // ---- Busyness profiles: 15 numbers = 8 AM through 10 PM (0-100). ----
  // 0 means closed. Under 35 = Quiet, under 65 = Moderate, else Busy.
  // Each profile has a weekday and a weekend version.
  profiles: {
    //           8a  9a 10a 11a 12p  1p  2p  3p  4p  5p  6p  7p  8p  9p 10p
    gym:     { weekday: [20, 25, 25, 30, 30, 25, 30, 40, 60, 85, 90, 80, 60, 40, 20],
               weekend: [30, 45, 55, 60, 60, 55, 50, 50, 55, 60, 55, 45, 35, 25, 15] },
    ski:     { weekday: [40, 55, 60, 55, 50, 45, 40, 30, 10,  0,  0,  0,  0,  0,  0],
               weekend: [75, 92, 95, 90, 80, 70, 60, 45, 15,  0,  0,  0,  0,  0,  0] },
    outdoor: { weekday: [15, 20, 25, 30, 35, 35, 40, 45, 50, 45, 35, 20, 10,  5,  5],
               weekend: [25, 35, 50, 60, 70, 85, 90, 85, 70, 55, 40, 25, 15, 10,  5] },
    indoor:  { weekday: [ 0,  0, 15, 25, 30, 30, 40, 50, 60, 70, 75, 70, 55, 35, 20],
               weekend: [ 0,  0, 50, 65, 75, 85, 90, 85, 80, 80, 75, 65, 50, 35, 20] },
    museum:  { weekday: [ 0, 25, 35, 40, 40, 45, 40, 30, 15,  0,  0,  0,  0,  0,  0],
               weekend: [ 0, 45, 65, 75, 80, 75, 65, 50, 20,  0,  0,  0,  0,  0,  0] },
    venue:   { weekday: [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 30, 60, 90, 85, 50],
               weekend: [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 45, 75, 95, 90, 60] },
    // Hidden gems stay quiet all day, so the demo always has quiet picks to show.
    gem:     { weekday: [10, 15, 15, 20, 20, 25, 25, 25, 25, 20, 15, 10,  5,  0,  0],
               weekend: [15, 20, 25, 25, 30, 30, 30, 30, 25, 20, 15, 10,  5,  0,  0] },
    golf:    { weekday: [40, 45, 40, 35, 30, 30, 35, 45, 55, 60, 45,  0,  0,  0,  0],
               weekend: [80, 90, 85, 75, 65, 55, 50, 45, 40, 35, 25,  0,  0,  0,  0] },
    rink:    { weekday: [ 0,  0, 10, 15, 25, 20, 20, 30, 45, 55, 70, 75, 50,  0,  0],
               weekend: [ 0, 30, 45, 60, 70, 80, 75, 65, 60, 55, 60, 55, 40,  0,  0] },
  },

  // ---- Places. activity = an id above, profile = a key in profiles. ----
  // miles = distance from central Provo. pitch = one line for Discover.
  // featured: true = shown in the Featured row at the top of Discover.
  // lat/lng = where the pin goes on the Map tab (right-click a spot in Google Maps to copy them).
  places: [
    { id: "sundance",  name: "Sundance Resort",          activity: "ski",    town: "Provo Canyon", miles: 14, profile: "ski", lat: 40.3925, lng: -111.588,
      conditions: "Fresh snow, 6 in.",   price: "$95 lift ticket",   pitch: "Small, scenic resort with short lift lines" },
    { id: "brighton",  name: "Brighton",                 activity: "ski",    town: "Salt Lake",    miles: 48, profile: "ski", lat: 40.598, lng: -111.5832,
      conditions: "Packed powder, 24°F", price: "$119 lift ticket",  pitch: "Night skiing and a big terrain park" },
    { id: "pcmr",      name: "Park City Mountain",       activity: "ski",    town: "Park City",    miles: 52, profile: "ski", lat: 40.6514, lng: -111.508,
      conditions: "Groomed runs, 28°F",  price: "$189 lift ticket",  pitch: "The biggest ski area in the U.S." },
    { id: "ymountain", name: "Y Mountain Trail",         activity: "hike",   town: "Provo",        miles: 2,  profile: "outdoor", lat: 40.2456, lng: -111.6295,
      conditions: "Trail dry",           price: "Free",              pitch: "Steep 1-hour climb with the best view of the valley" },
    { id: "stewart",   name: "Stewart Falls",            activity: "hike",   town: "Provo Canyon", miles: 15, profile: "outdoor", lat: 40.3719, lng: -111.5995,
      conditions: "Some mud near falls", price: "Free",              pitch: "Easy 3.5-mile hike to a 200-ft waterfall" },
    { id: "quarry",    name: "The Quarry",               activity: "climb",  town: "Provo",        miles: 3,  profile: "gym", featured: true, lat: 40.277, lng: -111.659,
      conditions: "Indoor",              price: "$18 day pass",      pitch: "Indoor bouldering, no experience needed" },
    { id: "rockcanyon",name: "Rock Canyon",              activity: "climb",  town: "Provo",        miles: 3,  profile: "gem", featured: true, lat: 40.266, lng: -111.623,
      conditions: "Rock dry, 58°F",      price: "Free",              pitch: "Outdoor sport climbing a mile from campus" },
    { id: "peaks",     name: "Peaks Ice Arena",          activity: "skate",  town: "Provo",        miles: 2,  profile: "rink", lat: 40.2347, lng: -111.638,
      conditions: "Indoor",              price: "$8 open skate",     pitch: "Olympic rink with cheap skate rentals" },
    { id: "provoriver",name: "Provo River Trail",        activity: "bike",   town: "Provo",        miles: 1,  profile: "gem", lat: 40.26, lng: -111.67,
      conditions: "Trail dry",           price: "Free",              pitch: "Flat, paved, and runs all the way to the lake" },
    { id: "utahlake",  name: "Utah Lake State Park",     activity: "water",  town: "Provo",        miles: 4,  profile: "outdoor", lat: 40.237, lng: -111.738,
      conditions: "Calm water, 64°F",    price: "$15 per car",       pitch: "Rent a paddleboard and catch the sunset" },
    { id: "deercreek", name: "Deer Creek Reservoir",     activity: "water",  town: "Heber",        miles: 25, profile: "gem", lat: 40.43, lng: -111.507,
      conditions: "Light wind",          price: "$20 per car",       pitch: "Kayaks and sailboats under the mountains" },
    { id: "getair",    name: "Get Air Trampoline Park",  activity: "parks",  town: "Orem",         miles: 5,  profile: "indoor", featured: true, lat: 40.297, lng: -111.695,
      conditions: "Indoor",              price: "$17 for 90 min",    pitch: "Dodgeball, foam pits, and ninja courses" },
    { id: "boondocks", name: "Boondocks Fun Center",     activity: "arcade", town: "Draper",       miles: 24, profile: "indoor", lat: 40.518, lng: -111.89,
      conditions: "Indoor",              price: "$12 laser tag",     pitch: "Laser tag arena plus a giant arcade" },
    { id: "fatcats",   name: "Fat Cats",                 activity: "bowl",   town: "Provo",        miles: 2,  profile: "indoor", lat: 40.25, lng: -111.67,
      conditions: "Indoor",              price: "$5 per game",       pitch: "Cheap bowling and glow mini golf" },
    { id: "kiwanis",   name: "Kiwanis Park Courts",      activity: "sports", town: "Provo",        miles: 2,  profile: "gem", lat: 40.256, lng: -111.642,
      conditions: "Courts dry, 61°F",    price: "Free",              pitch: "Pickup volleyball and basketball most nights" },
    { id: "velour",    name: "Velour Live Music",        activity: "events", town: "Provo",        miles: 1,  profile: "venue", featured: true, lat: 40.2343, lng: -111.6585,
      conditions: "Indoor, doors 6 PM",  price: "$12 tickets",       pitch: "Tiny venue where local bands get their start" },
    { id: "ancientlife",name: "Museum of Ancient Life",  activity: "museum", town: "Lehi",         miles: 18, profile: "museum", lat: 40.429, lng: -111.89,
      conditions: "Indoor",              price: "$20 entry",         pitch: "Walk among 60 full-size dinosaur skeletons" },
    { id: "vasa",      name: "VASA Fitness",             activity: "gym",    town: "Orem",         miles: 5,  profile: "gym", lat: 40.299, lng: -111.694,
      conditions: "Indoor, open 24 hours", price: "$10/mo or $15 day pass", pitch: "Huge weight floor, pool, and classes" },
    { id: "golds",     name: "Gold's Gym",               activity: "gym",    town: "Provo",        miles: 2,  profile: "gym", lat: 40.265, lng: -111.66,
      conditions: "Indoor",              price: "$15 day pass",      pitch: "Classic lifting gym close to campus" },
    { id: "provorec",  name: "Provo Recreation Center",  activity: "gym",    town: "Provo",        miles: 1,  profile: "gem", lat: 40.229, lng: -111.651,
      conditions: "Indoor",              price: "$8 day pass",       pitch: "Gym, pool, and indoor track, rarely crowded midday" },
    { id: "eastbay",   name: "East Bay Golf Course",     activity: "golf",   town: "Provo",        miles: 3,  profile: "golf", lat: 40.212, lng: -111.646,
      conditions: "Greens firm, 60°F",   price: "$22 for 9 holes",   pitch: "Affordable public course with lake views" },
    { id: "tpoint",    name: "Thanksgiving Point Golf",  activity: "golf",   town: "Lehi",         miles: 18, profile: "golf", lat: 40.421, lng: -111.9,
      conditions: "Fairways dry, 59°F",  price: "$45 for 9 holes",   pitch: "Championship course with mountain views" },
    { id: "cascade",   name: "Cascade Golf Center",      activity: "golf",   town: "Orem",         miles: 6,  profile: "gem", lat: 40.3105, lng: -111.673,
      conditions: "Range open, light wind", price: "$10 bucket of balls", pitch: "Driving range and putting green, no tee time needed" },
    { id: "byumoa",    name: "BYU Museum of Art",        activity: "museum", town: "Provo",        miles: 1,  profile: "gem", featured: true, lat: 40.251, lng: -111.648,
      conditions: "Indoor",              price: "Free",              pitch: "Free art museum with a great café" },
    { id: "hogle",     name: "Hogle Zoo",                activity: "museum", town: "Salt Lake",    miles: 45, profile: "museum", lat: 40.7502, lng: -111.8143,
      conditions: "Sunny, 62°F",         price: "$25 entry",         pitch: "Polar bears, giraffes, and a train ride" },
  ],

  // ---- Map tab: where "you" are, plus nearby businesses that aren't activities. ----
  // Business names are made up for the demo. type picks the icon: Coffee, Food, or Gear rental.
  you: { lat: 40.2500, lng: -111.6490 },   // BYU campus
  businesses: [
    { name: "Canyon Grind Coffee",    type: "Coffee",      lat: 40.2335, lng: -111.6560, note: "Espresso and breakfast burritos", deal: "Free pastry with any drink" },
    { name: "Trailhead Tacos",        type: "Food",        lat: 40.2475, lng: -111.6385, note: "Quick bites before a hike",       deal: "$2 off after 8 PM" },
    { name: "Center Street Pizza",    type: "Food",        lat: 40.2340, lng: -111.6620, note: "Slices until midnight",           deal: "10% off with Activitree" },
    { name: "Summit Gear Rentals",    type: "Gear rental", lat: 40.2620, lng: -111.6550, note: "Skis, boards, and climbing shoes", deal: "20% off weekday rentals" },
    { name: "Lakeside Paddle Co.",    type: "Gear rental", lat: 40.2385, lng: -111.7300, note: "Paddleboards and kayaks by the hour", deal: "Second hour free" },
    { name: "Orem Bike Shop",         type: "Gear rental", lat: 40.2960, lng: -111.6900, note: "E-bike and mountain bike rentals", deal: "$5 off half-day rentals" },
    { name: "Sundance Deli",          type: "Food",        lat: 40.3930, lng: -111.5870, note: "Sandwiches at the base of the lifts", deal: "Free cocoa with a sandwich" },
  ],

  // ---- Update tab: share conditions, earn points. ----
  startingPoints: 75,   // a full first update (25 pts) unlocks the first reward
  // How many points each part of an update earns.
  pointsFor: { busyness: 10, conditions: 5, note: 10 },
  // Rewards unlock at these point totals. Partner names are made up for the demo.
  rewards: [
    { points: 100, name: "Free cocoa at Sundance Deli" },
    { points: 250, name: "20% off at Summit Gear Rentals" },
    { points: 500, name: "Free day pass at a partner gym" },
  ],
  // Quick tags people can tap to describe conditions.
  conditionTags: ["Trail dry", "Muddy", "Icy", "Fresh snow", "Great weather", "Windy",
                  "Parking full", "Easy parking", "Long lines", "No wait"],
  // Recent updates from other people. place = a place id. busy = quiet, moderate, or busy.
  updates: [
    { who: "Maya",   place: "ymountain",  busy: "quiet",    tags: ["Trail dry", "Easy parking"], note: "Lot has plenty of space", ago: "8 min ago" },
    { who: "Tyler",  place: "quarry",     busy: "moderate", tags: ["No wait"],                    note: "Auto belays are open",    ago: "22 min ago" },
    { who: "Kenzie", place: "sundance",   busy: "busy",     tags: ["Fresh snow", "Long lines"],   note: "",                        ago: "35 min ago" },
    { who: "Sam",    place: "kiwanis",    busy: "quiet",    tags: ["Great weather"],              note: "One court open",          ago: "1 hr ago" },
  ],

  // ---- Community groups. place = a place id above. ----
  // chat = sample messages shown when you open the group's chat.
  groups: [
    { title: "Sunset hike", place: "ymountain", when: "Sat 6 PM", going: 4, spots: 4, chat: [
      { from: "Maya",  text: "Meeting at the trailhead lot at 5:45" },
      { from: "Josh",  text: "Bring a headlamp for the way down" },
      { from: "Maya",  text: "Anyone need a ride from campus?" } ] },
    { title: "Beginner bouldering", place: "quarry", when: "Sat 7 PM", going: 6, spots: 2, chat: [
      { from: "Tyler", text: "First time? Shoe rentals are at the front desk" },
      { from: "Ana",   text: "I'm new too, glad I'm not the only one" } ] },
    { title: "First chair crew", place: "sundance", when: "Sun 8 AM", going: 3, spots: 1, chat: [
      { from: "Ben",   text: "6 inches overnight. Leaving Provo at 7:15" },
      { from: "Kenzie",text: "I have room for 2 in my car" } ] },
    { title: "Pickup volleyball", place: "kiwanis", when: "Mon 7 PM", going: 9, spots: 3, chat: [
      { from: "Sam",   text: "I'll bring the net and a ball" },
      { from: "Lily",  text: "All levels welcome, we rotate teams" } ] },
    { title: "Open skate + hot cocoa", place: "peaks", when: "Fri 8 PM", going: 5, spots: 5, chat: [
      { from: "Emma",  text: "Cocoa after at the shop across the street" } ] },
    { title: "Lake paddle", place: "utahlake", when: "Sat 5 PM", going: 2, spots: 6, chat: [
      { from: "Carlos",text: "Paddleboard rentals are $15 an hour at the marina" } ] },
    { title: "Glow bowling night", place: "fatcats", when: "Thu 9 PM", going: 7, spots: 1, chat: [
      { from: "Jess",  text: "Lane 12, we'll save you a spot" },
      { from: "Drew",  text: "Loser buys fries" } ] },
    { title: "Local bands show", place: "velour", when: "Fri 8 PM", going: 8, spots: 4, chat: [
      { from: "Rachel",text: "Doors at 6, the opener is really good" } ] },
    { title: "Easy river ride", place: "provoriver", when: "Sun 10 AM", going: 3, spots: 5, chat: [
      { from: "Nate",  text: "Super chill pace, about 10 miles round trip" } ] },
    { title: "Morning lift buddies", place: "golds", when: "Tue 6 AM", going: 3, spots: 2, chat: [
      { from: "Chris", text: "Push day. Meet by the squat racks" },
      { from: "Hannah",text: "I'll spot whoever needs it" } ] },
    { title: "Twilight nine holes", place: "eastbay", when: "Thu 5 PM", going: 3, spots: 1, chat: [
      { from: "Jake",  text: "Tee time is 5:10, all skill levels" },
      { from: "Olivia",text: "I can bring extra clubs if anyone needs them" } ] },
    { title: "Dino museum trip", place: "ancientlife", when: "Sat 11 AM", going: 4, spots: 2, chat: [] },
  ],

  // After you send a chat message, another member replies with one of these.
  chatReplies: ["Sounds good!", "See you there", "Nice, glad you're coming", "Can't wait", "Love it"],
};

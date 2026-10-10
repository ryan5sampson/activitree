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
  places: [
    { id: "sundance",  name: "Sundance Resort",          activity: "ski",    town: "Provo Canyon", miles: 14, profile: "ski",
      conditions: "Fresh snow, 6 in.",   price: "$95 lift ticket",   pitch: "Small, scenic resort with short lift lines" },
    { id: "brighton",  name: "Brighton",                 activity: "ski",    town: "Salt Lake",    miles: 48, profile: "ski",
      conditions: "Packed powder, 24°F", price: "$119 lift ticket",  pitch: "Night skiing and a big terrain park" },
    { id: "pcmr",      name: "Park City Mountain",       activity: "ski",    town: "Park City",    miles: 52, profile: "ski",
      conditions: "Groomed runs, 28°F",  price: "$189 lift ticket",  pitch: "The biggest ski area in the U.S." },
    { id: "ymountain", name: "Y Mountain Trail",         activity: "hike",   town: "Provo",        miles: 2,  profile: "outdoor",
      conditions: "Trail dry",           price: "Free",              pitch: "Steep 1-hour climb with the best view of the valley" },
    { id: "stewart",   name: "Stewart Falls",            activity: "hike",   town: "Provo Canyon", miles: 15, profile: "outdoor",
      conditions: "Some mud near falls", price: "Free",              pitch: "Easy 3.5-mile hike to a 200-ft waterfall" },
    { id: "quarry",    name: "The Quarry",               activity: "climb",  town: "Provo",        miles: 3,  profile: "gym", featured: true,
      conditions: "Indoor",              price: "$18 day pass",      pitch: "Indoor bouldering, no experience needed" },
    { id: "rockcanyon",name: "Rock Canyon",              activity: "climb",  town: "Provo",        miles: 3,  profile: "gem", featured: true,
      conditions: "Rock dry, 58°F",      price: "Free",              pitch: "Outdoor sport climbing a mile from campus" },
    { id: "peaks",     name: "Peaks Ice Arena",          activity: "skate",  town: "Provo",        miles: 2,  profile: "rink",
      conditions: "Indoor",              price: "$8 open skate",     pitch: "Olympic rink with cheap skate rentals" },
    { id: "provoriver",name: "Provo River Trail",        activity: "bike",   town: "Provo",        miles: 1,  profile: "gem",
      conditions: "Trail dry",           price: "Free",              pitch: "Flat, paved, and runs all the way to the lake" },
    { id: "utahlake",  name: "Utah Lake State Park",     activity: "water",  town: "Provo",        miles: 4,  profile: "outdoor",
      conditions: "Calm water, 64°F",    price: "$15 per car",       pitch: "Rent a paddleboard and catch the sunset" },
    { id: "deercreek", name: "Deer Creek Reservoir",     activity: "water",  town: "Heber",        miles: 25, profile: "gem",
      conditions: "Light wind",          price: "$20 per car",       pitch: "Kayaks and sailboats under the mountains" },
    { id: "getair",    name: "Get Air Trampoline Park",  activity: "parks",  town: "Orem",         miles: 5,  profile: "indoor", featured: true,
      conditions: "Indoor",              price: "$17 for 90 min",    pitch: "Dodgeball, foam pits, and ninja courses" },
    { id: "boondocks", name: "Boondocks Fun Center",     activity: "arcade", town: "Draper",       miles: 24, profile: "indoor",
      conditions: "Indoor",              price: "$12 laser tag",     pitch: "Laser tag arena plus a giant arcade" },
    { id: "fatcats",   name: "Fat Cats",                 activity: "bowl",   town: "Provo",        miles: 2,  profile: "indoor",
      conditions: "Indoor",              price: "$5 per game",       pitch: "Cheap bowling and glow mini golf" },
    { id: "kiwanis",   name: "Kiwanis Park Courts",      activity: "sports", town: "Provo",        miles: 2,  profile: "gem",
      conditions: "Courts dry, 61°F",    price: "Free",              pitch: "Pickup volleyball and basketball most nights" },
    { id: "velour",    name: "Velour Live Music",        activity: "events", town: "Provo",        miles: 1,  profile: "venue", featured: true,
      conditions: "Indoor, doors 6 PM",  price: "$12 tickets",       pitch: "Tiny venue where local bands get their start" },
    { id: "ancientlife",name: "Museum of Ancient Life",  activity: "museum", town: "Lehi",         miles: 18, profile: "museum",
      conditions: "Indoor",              price: "$20 entry",         pitch: "Walk among 60 full-size dinosaur skeletons" },
    { id: "vasa",      name: "VASA Fitness",             activity: "gym",    town: "Orem",         miles: 5,  profile: "gym",
      conditions: "Indoor, open 24 hours", price: "$10/mo or $15 day pass", pitch: "Huge weight floor, pool, and classes" },
    { id: "golds",     name: "Gold's Gym",               activity: "gym",    town: "Provo",        miles: 2,  profile: "gym",
      conditions: "Indoor",              price: "$15 day pass",      pitch: "Classic lifting gym close to campus" },
    { id: "provorec",  name: "Provo Recreation Center",  activity: "gym",    town: "Provo",        miles: 1,  profile: "gem",
      conditions: "Indoor",              price: "$8 day pass",       pitch: "Gym, pool, and indoor track, rarely crowded midday" },
    { id: "eastbay",   name: "East Bay Golf Course",     activity: "golf",   town: "Provo",        miles: 3,  profile: "golf",
      conditions: "Greens firm, 60°F",   price: "$22 for 9 holes",   pitch: "Affordable public course with lake views" },
    { id: "tpoint",    name: "Thanksgiving Point Golf",  activity: "golf",   town: "Lehi",         miles: 18, profile: "golf",
      conditions: "Fairways dry, 59°F",  price: "$45 for 9 holes",   pitch: "Championship course with mountain views" },
    { id: "cascade",   name: "Cascade Golf Center",      activity: "golf",   town: "Orem",         miles: 6,  profile: "gem",
      conditions: "Range open, light wind", price: "$10 bucket of balls", pitch: "Driving range and putting green, no tee time needed" },
    { id: "byumoa",    name: "BYU Museum of Art",        activity: "museum", town: "Provo",        miles: 1,  profile: "gem", featured: true,
      conditions: "Indoor",              price: "Free",              pitch: "Free art museum with a great café" },
    { id: "hogle",     name: "Hogle Zoo",                activity: "museum", town: "Salt Lake",    miles: 45, profile: "museum",
      conditions: "Sunny, 62°F",         price: "$25 entry",         pitch: "Polar bears, giraffes, and a train ride" },
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

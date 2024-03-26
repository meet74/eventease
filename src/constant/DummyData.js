import { Entypo, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export const dummyCities = [
  {
    name: "Toronto",
    fullname:"Toronto, ON"
  },
  {
    name: "Calgary",
    fullname:"Calgary, AB"
  },
  {
    name: "Vancouver",
    fullname:"Vancouver, BC"
  },
  {
    name: "Halifax",
    fullname:"Halifax, NS"
  },
  {
    name: "Ottawa",
    fullname:"Ottawa, ON"
  },
  {
    name: "Montreal",
    fullname:"Montreal, QC"
  },

];


export const headerTiles = [
  {
    icon:<Entypo name="sports-club" size={24} color="white" />,
    name:"Sports",
    bgColor:"#F0635A"
  },
  {
    icon:<Feather name="music" size={24} color="white" />,
    name:"Music",
    bgColor:"#F59762"
  },
  {
    icon:<Ionicons name="restaurant" size={24} color="white" />,
    name:"Restaurant",
    bgColor:"#29D697"
  },
  {
    icon:<FontAwesome5 name="paint-brush" size={24} color="white" />,
    name:"Art",
    bgColor:"#46CDFB"
  }
]


export const data = {
  
  events:[
  {
    "id":1,
    "eventName": "Food Truck Festival",
    "eventDate": "2024-08-20",
    "eventLocation": "Stanley Park, Toronto, ON",
    "city":"Toronto",
    "eventDescription": "Indulge in a variety of mouthwatering cuisines from Toronto's best food trucks. Enjoy live music, entertainment, and fun for the whole family!",
    "organizerName": "Foodie Delights Events",
    "ticketPrice": "$15",
    "eventImage": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    "id":2,
    "eventName": "Summer Concert Series",
    "eventDate": "2024-09-05",
    "eventLocation": "Riverfront Amphitheater, Toronto, ON",
    "city":"Toronto",
    "eventDescription": "Experience the magic of live music under the stars at the Summer Concert Series. Featuring top artists and bands performing your favorite hits!",
    "organizerName": "Melody Masters Productions",
    "ticketPrice": "$20",
    "eventImage": "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    "id":3,
    "eventName": "Toronto International Film Festival",
    "eventDate": "2024-09-15",
    "eventLocation": "Various Venues, Toronto, ON",
    "city":"Toronto",
    "eventDescription": "Join cinephiles from around the world for premieres, screenings, and discussions at one of the largest film festivals globally, the Toronto International Film Festival (TIFF).",
    "organizerName": "TIFF",
    "ticketPrice": "$30",
    "eventImage": "https://images.unsplash.com/photo-1620577610365-86c411bad78d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":4,
    "eventName": "Toronto Fashion Week",
    "eventDate": "2024-10-20",
    "eventLocation": "Fashion District, Toronto, ON",
    "city":"Toronto",
    "eventDescription": "Experience the latest trends and designs from top fashion houses and emerging designers at Toronto Fashion Week. Get a glimpse of the future of fashion!",
    "organizerName": "Fashion Forward Events",
    "ticketPrice": "$40",
    "eventImage": "https://images.unsplash.com/photo-1578946956088-940c3b502864?q=80&w=2823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":5,
    "eventName": "Toronto Christmas Market",
    "eventDate": "2024-11-25",
    "eventLocation": "Distillery District, Toronto, ON",
    "city":"Toronto",
    "eventDescription": "Immerse yourself in the festive spirit at the Toronto Christmas Market. Explore charming stalls, enjoy seasonal treats, and experience holiday cheer!",
    "organizerName": "Holiday Magic Events",
    "ticketPrice": "$20",
    "eventImage": "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    "id":6,
    "eventName": "Food Truck Festival",
    "eventDate": "2024-08-20",
    "eventLocation": "Stanley Park, Vancouver, BC",
    "city":"Vancouver",
    "eventDescription": "Satisfy your cravings with a variety of delicious cuisines from Vancouver's best food trucks. Bring your appetite and enjoy a day of culinary delights!",
    "organizerName": "Tasty Travels Events",
    "ticketPrice": "$15",
    "eventImage": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":7,
    "eventName": "Outdoor Yoga Retreat",
    "eventDate": "2024-09-05",
    "eventLocation": "Kitsilano Beach, Vancouver, BC",
    "city":"Vancouver",
    "eventDescription": "Unwind and find inner peace with a rejuvenating yoga session by the ocean. Connect with nature and nourish your mind, body, and soul.",
    "organizerName": "Zen Wellness Workshops",
    "ticketPrice": "$20",
    "eventImage": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":8,
    "eventName": "Vancouver International Jazz Festival",
    "eventDate": "2024-07-01",
    "eventLocation": "Various Venues, Vancouver, BC",
    "city":"Vancouver",
    "eventDescription": "Celebrate the sounds of jazz with performances by renowned musicians and emerging artists at the Vancouver International Jazz Festival.",
    "organizerName": "Jazz Groove Productions",
    "ticketPrice": "$35",
    "eventImage": "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":9,
    "eventName": "Vancouver International Film Festival",
    "eventDate": "2024-09-10",
    "eventLocation": "Various Venues, Vancouver, BC",
    "city":"Vancouver",
    "eventDescription": "Explore the world of cinema at the Vancouver International Film Festival. Enjoy screenings, Q&A sessions, and special events.",
    "organizerName": "VIFF",
    "ticketPrice": "$25",
    "eventImage": "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":10,
    "eventName": "Vancouver Cherry Blossom Festival",
    "eventDate": "2024-04-05",
    "eventLocation": "Various Locations, Vancouver, BC",
    "city":"Vancouver",
    "eventDescription": "Experience the beauty of spring at the Vancouver Cherry Blossom Festival. Enjoy guided walks, cultural performances, and picnics under blooming cherry trees.",
    "organizerName": "Cherry Blossom Society",
    "ticketPrice": "Free",
    "eventImage": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    "id":11,
    "eventName": "Calgary Stampede",
    "eventDate": "2024-07-05",
    "eventLocation": "Stampede Park, Calgary, AB",
    "city":"Calgary",
    "eventDescription": "Experience the excitement of the Calgary Stampede, featuring rodeo competitions, live music, carnival rides, and delicious food.",
    "organizerName": "Calgary Stampede",
    "ticketPrice": "$40",
    "eventImage": "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":12,
    "eventName": "Calgary Folk Music Festival",
    "eventDate": "2024-07-25",
    "eventLocation": "Prince's Island Park, Calgary, AB",
    "city":"Calgary",
    "eventDescription": "Enjoy performances by folk and roots musicians from around the world amidst the scenic beauty of Prince's Island Park at the Calgary Folk Music Festival.",
    "organizerName": "Calgary Folk Music Festival Society",
    "ticketPrice": "$30",
    "eventImage": "https://images.unsplash.com/photo-1578946956088-940c3b502864?q=80&w=2823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":13,
    "eventName": "Calgary International Film Festival",
    "eventDate": "2024-09-20",
    "eventLocation": "Various Venues, Calgary, AB",
    "city":"Calgary",
    "eventDescription": "Immerse yourself in the world of cinema at the Calgary International Film Festival. Discover independent films, documentaries, and more.",
    "organizerName": "CIFF",
    "ticketPrice": "$20",
    "eventImage": "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    "id":14,
    "eventName": "Stampede Rodeo",
    "eventDate": "2024-07-10",
    "eventLocation": "Stampede Park, Calgary, AB",
    "city":"Calgary",
    "eventDescription": "Experience the thrill of the Wild West at the Calgary Stampede Rodeo. Watch cowboys and cowgirls compete in various rodeo events!",
    "organizerName": "Wild West Events",
    "ticketPrice": "$30",
    "eventImage": "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":15,
    "eventName": "Summer Music Festival",
    "eventDate": "2024-08-15",
    "eventLocation": "Prince's Island Park, Calgary, AB",
    "city":"Calgary",
    "eventDescription": "Dance the day away with live performances from top artists at the Summer Music Festival. Enjoy great music, food, and company!",
    "organizerName": "Summer Vibes Productions",
    "ticketPrice": "$35",
    "eventImage": "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    "id":16,
    "eventName": "Halifax Jazz Festival",
    "eventDate": "2024-07-09",
    "eventLocation": "Multiple Venues, Halifax, NS",
    "eventDescription": "Experience the soulful sounds of jazz at the Halifax Jazz Festival, featuring performances by renowned artists from around the globe.",
    "organizerName": "Halifax Jazz Festival Society",
    "ticketPrice": "$35",
    "eventImage": "https://images.unsplash.com/photo-1546707012-c46675f12716?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":17,
    "eventName": "Halifax Comedy Festival",
    "eventDate": "2024-08-15",
    "eventLocation": "Various Venues, Halifax, NS",
    "eventDescription": "Get ready to laugh at the Halifax Comedy Festival, featuring hilarious stand-up performances and comedy showcases at multiple venues across the city.",
    "organizerName": "Halifax Comedy Festival Society",
    "ticketPrice": "$25",
    "eventImage": "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":18,
    "eventName": "Halifax International Busker Festival",
    "eventDate": "2024-09-05",
    "eventLocation": "Halifax Waterfront, Halifax, NS",
    "eventDescription": "Experience thrilling street performances and jaw-dropping acts at the Halifax International Busker Festival, where world-class buskers entertain audiences along the scenic waterfront.",
    "organizerName": "Halifax Busker Festival Society",
    "ticketPrice": "Free Admission",
    "eventImage": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    "id":19,
    "eventName": "Seafood Festival",
    "eventDate": "2024-08-05",
    "eventLocation": "Waterfront, Halifax, NS",
    "city":"Halifax",
    "eventDescription": "Indulge in fresh and delicious seafood dishes at the annual Halifax Seafood Festival. Experience maritime culinary delights!",
    "organizerName": "Maritime Cuisine Events",
    "ticketPrice": "$20",
    "eventImage": "https://images.unsplash.com/photo-1578946956088-940c3b502864?q=80&w=2823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":20,
    "eventName": "Harbor Cruise",
    "eventDate": "2024-09-20",
    "eventLocation": "Halifax Harbor, Halifax, NS",
    "city":"Halifax",
    "eventDescription": "Embark on a scenic cruise around Halifax Harbor and enjoy breathtaking views of the coastline. Relax and unwind on the water!",
    "organizerName": "Seaside Adventures",
    "ticketPrice": "$25",
    "eventImage": "https://images.unsplash.com/photo-1546707012-c46675f12716?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    "id":21,
    "eventName": "International Film Festival",
    "eventDate": "2024-09-10",
    "eventLocation": "Downtown Montreal, QC",
    "city":"Montreal",
    "eventDescription": "Experience the magic of cinema at the International Film Festival. Discover groundbreaking films from around the world!",
    "organizerName": "Cinephile Productions",
    "ticketPrice": "$20",
    "eventImage": "https://images.unsplash.com/photo-1520217358555-0d3d1bfcb812?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":22,
    "eventName": "Cultural Street Festival",
    "eventDate": "2024-10-15",
    "eventLocation": "Old Montreal, QC",
    "city":"Montreal",
    "eventDescription": "Immerse yourself in the vibrant culture of Montreal at the Cultural Street Festival. Enjoy music, dance, food, and art from diverse communities!",
    "organizerName": "Cultural Exchange Events",
    "ticketPrice": "$15",
    "eventImage": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":23,
    "eventName": "Montreal International Jazz Festival",
    "eventDate": "2024-06-28",
    "eventLocation": "Various Venues, Montreal, QC",
    "city":"Montreal",
    "eventDescription": "Experience the world's largest jazz festival, featuring thousands of artists from around the globe performing in indoor and outdoor venues across Montreal.",
    "organizerName": "Montreal Jazz Festival Society",
    "ticketPrice": "Varies",
    "eventImage": "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":24,
    "eventName": "Montreal World Film Festival",
    "eventDate": "2024-08-23",
    "eventLocation": "Various Venues, Montreal, QC",
    "city":"Montreal",
    "eventDescription": "Celebrate the art of cinema at the Montreal World Film Festival, showcasing a diverse selection of international films and hosting screenings, panels, and special events.",
    "organizerName": "Montreal Film Festival Society",
    "ticketPrice": "Varies",
    "eventImage": "https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":25,
    "eventName": "Montreal International Fireworks Competition",
    "eventDate": "2024-09-10",
    "eventLocation": "La Ronde, Montreal, QC",
    "city":"Montreal",
    "eventDescription": "Witness breathtaking pyrotechnic displays from the world's top fireworks artists at the Montreal International Fireworks Competition, a spectacular event held annually at La Ronde.",
    "organizerName": "Montreal Fireworks Competition Committee",
    "ticketPrice": "$20",
    "eventImage": "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

]}
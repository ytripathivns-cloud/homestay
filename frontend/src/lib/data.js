// Static data sourced from the Airbnb listing for Varanasi Paradise Homestay
export const PROPERTY = {
  name: "Varanasi Paradise",
  fullName: "Varanasi Paradise Homestay",
  logo: "/logo.png",
  logoMark: "/favicon-192.png",
  tagline: "A serene retreat near the temples and ghats of Kashi",
  shortTagline: "Near Temple & Ghat",
  city: "Varanasi, Uttar Pradesh",
  country: "India",
  host: "Yogendra",
  hostBio:
    "Resident of Varanasi and an academician by profession. Hosting with quiet pride for three years and a Superhost since the very first season.",
  rating: 4.89,
  reviewsCount: 219,
  bedrooms: 3,
  bathrooms: 2,
  maxGuests: 6,
  yearsHosting: 3,
  airbnbUrl: "https://www.airbnb.co.in/h/varanasiparadise",
};

export const HERO_IMAGE =
  "https://a0.muscache.com/im/pictures/hosting/Hosting-830853368952224570/original/cfb56e4d-1fea-408c-8c2f-0b90271fa85b.jpeg?im_w=1440";

export const GALLERY = [
  {
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-830853368952224570/original/0d76eec3-67ed-4061-baee-a352e6d9f2e2.jpeg?im_w=1200",
    alt: "Sunlit bedroom with garden view at Varanasi Paradise Homestay",
  },
  {
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-830853368952224570/original/61cb873f-bce5-4de1-b521-031b68315a45.jpeg?im_w=1200",
    alt: "King-bed bedroom with patio view — Varanasi homestay near Kashi Vishwanath",
  },
  {
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODMwODUzMzY4OTUyMjI0NTcw/original/45dbe581-2977-4c3b-94b6-6c971f3d64a4.jpeg?im_w=1200",
    alt: "Living area with 50-inch smart TV at Varanasi Paradise homestay",
  },
  {
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODMwODUzMzY4OTUyMjI0NTcw/original/38670c42-4785-438a-94ef-4bd4fe9433af.jpeg?im_w=1200",
    alt: "Equipped kitchen and dining area at Varanasi homestay near ghats",
  },
  {
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODMwODUzMzY4OTUyMjI0NTcw/original/e779c51d-0d20-4838-be9d-68c638e16c0f.jpeg?im_w=1200",
    alt: "Outdoor garden patio with water fountain at Varanasi Paradise Homestay",
  },
  {
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODMwODUzMzY4OTUyMjI0NTcw/original/8cb7617f-3280-42da-9762-f8ffe8a986d6.jpeg?im_w=1200",
    alt: "Aesthetic bedroom with study desk — Varanasi homestay near BHU",
  },
];

export const HOST_IMAGE =
  "https://a0.muscache.com/im/pictures/user/User/original/35aced97-659a-48cc-b2a6-1ec7caf54914.jpeg?im_w=480";

export const LOCATION_BG =
  "https://images.pexels.com/photos/8112524/pexels-photo-8112524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800";

export const MARIGOLD_TEXTURE =
  "https://images.pexels.com/photos/35249981/pexels-photo-35249981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const BEDROOMS = [
  {
    id: 1,
    title: "Bedroom One",
    detail: "1 King bed · 3 sofas · Patio view",
    image: GALLERY[1].url,
  },
  {
    id: 2,
    title: "Bedroom Two",
    detail: "1 Queen bed · Wakefit premium mattress",
    image: GALLERY[0].url,
  },
  {
    id: 3,
    title: "Bedroom Three",
    detail: "1 King bed · Study desk · AC",
    image: GALLERY[5].url,
  },
];

export const AMENITIES = [
  { icon: "Wifi", label: "Fast Wi-Fi", note: "195 Mbps" },
  { icon: "Tv", label: "50\" Smart TV", note: "Netflix, Prime, Hotstar" },
  { icon: "Wind", label: "Blue Star AC", note: "All bedrooms" },
  { icon: "ChefHat", label: "Equipped Kitchen", note: "Induction · Microwave" },
  { icon: "Car", label: "Free Parking", note: "Driveway, 1 space" },
  { icon: "WashingMachine", label: "Free Washer", note: "In-unit" },
  { icon: "Trees", label: "Garden Patio", note: "Water fountain" },
  { icon: "Briefcase", label: "Workspace", note: "Dedicated desk" },
  { icon: "ShowerHead", label: "Hot Water Geyser", note: "Both bathrooms" },
  { icon: "KeyRound", label: "Self Check-in", note: "Lockbox entry" },
  { icon: "Coffee", label: "Tea & Coffee", note: "Complimentary sachets" },
  { icon: "ShieldCheck", label: "Secure Entrance", note: "Private ground floor" },
];

export const NEARBY = [
  { name: "Kashi Vishwanath Dham", distance: "~2.8 km" },
  { name: "Dashashwamedh Ghat", distance: "~3.2 km" },
  { name: "Assi Ghat", distance: "~3.5 km" },
  { name: "Sankat Mochan Temple", distance: "~2.4 km" },
  { name: "Banaras Hindu University (BHU)", distance: "~3.5 km" },
  { name: "Varanasi Junction Railway", distance: "~2.0 km" },
];

export const REVIEWS = [
  {
    name: "Daksh",
    date: "March 2026",
    rating: 4,
    text: "We had a wonderful stay in Banaras. The host was very humble and always prompt in helping us in every way possible. The house was exactly the same as shown in the photographs.",
  },
  {
    name: "Chandni",
    date: "March 2026",
    rating: 5,
    text: "I had booked the property for my parents who were traveling to Banaras for the first time. Yogendra is a wonderful host. He helped my parents with every information needed. The place was extremely clean and well maintained. Highly recommended!",
  },
  {
    name: "Aarav",
    date: "February 2026",
    rating: 5,
    text: "Spotless rooms, calm patio with a tiny fountain, and lightning fast Wi-Fi. We worked remotely for two days and toured the ghats every evening. Felt like home.",
  },
  {
    name: "Priya",
    date: "January 2026",
    rating: 5,
    text: "The location is genuinely central. We walked, took autos, and a battery rickshaw to all the famous spots. Yogendra ji shared a thoughtful list of food places too.",
  },
];

export const REVIEW_HIGHLIGHTS = [
  "Hospitality · 187",
  "Cleanliness · 75",
  "Location · 56",
  "Family-friendly · 51",
  "Comfort · 38",
  "Amenities · 27",
  "Air conditioning · 10",
  "Getting around · 47",
];

export const RATING_BREAKDOWN = [
  { label: "Cleanliness", value: 4.9 },
  { label: "Accuracy", value: 4.9 },
  { label: "Check-in", value: 4.9 },
  { label: "Communication", value: 5.0 },
  { label: "Location", value: 4.5 },
  { label: "Value", value: 4.8 },
];

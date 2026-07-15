/**
 * Buildings & Places Deck — អគារ និងកន្លែង
 */

export const deckMeta = {
  id: "buildings",
  title: "អគារ និងកន្លែង",
  titleEnglish: "Buildings & Places",
  emoji: "🏠",
  description: "Common buildings and places in a town",
  category: "vocabulary",
  order: 17,
};

const items = [
  { khmer: "ផ្ទះ", english: "House", emoji: "🏠", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&auto=format" },
  { khmer: "សាលារៀន", english: "School", emoji: "🏫", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop&auto=format" },
  { khmer: "មន្ទីរពេទ្យ", english: "Hospital", emoji: "🏥", image: "https://images.unsplash.com/photo-1587351021759-3772687fe598?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ផ្សារ", english: "Market", emoji: "🏪", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop&auto=format" },
  { khmer: "វត្ត", english: "Temple", emoji: "🛕", image: "https://images.unsplash.com/photo-1569939389-4e1c16a3b8d2?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ធនាគារ", english: "Bank", emoji: "🏦", image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភោជនីយដ្ឋាន", english: "Restaurant", emoji: "🍽️", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop&auto=format" },
  { khmer: "សណ្ឋាគារ", english: "Hotel", emoji: "🏨", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ប៉ុស្តិ៍នគរបាល", english: "Police station", emoji: "🚓", image: "https://images.unsplash.com/photo-1587560699334-cc4c63477ce9?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ព្រលានយន្តហោះ", english: "Airport", emoji: "✈️", image: "https://images.unsplash.com/photo-1571432248690-7fd6980a6aae?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `building-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "buildings",
}));

/**
 * Animals Deck — សត្វ
 */

export const deckMeta = {
  id: "animals",
  title: "សត្វ",
  titleEnglish: "Animals",
  emoji: "🐾",
  description: "Common animals in Khmer",
  category: "vocabulary",
  order: 9,
};

const items = [
  { khmer: "ឆ្កែ", english: "Dog", emoji: "🐕", image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ឆ្មា", english: "Cat", emoji: "🐈", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&auto=format" },
  { khmer: "គោ", english: "Cow", emoji: "🐄", image: "https://images.unsplash.com/photo-1570042225831-d98af757d331?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ជ្រូក", english: "Pig", emoji: "🐖", image: "https://images.unsplash.com/photo-1516467620081-e3096731c7f8?w=400&h=400&fit=crop&auto=format" },
  { khmer: "មាន់", english: "Chicken", emoji: "🐓", image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ត្រី", english: "Fish", emoji: "🐟", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ដំរី", english: "Elephant", emoji: "🐘", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef4c?w=400&h=400&fit=crop&auto=format" },
  { khmer: "សេះ", english: "Horse", emoji: "🐎", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ស្វា", english: "Monkey", emoji: "🐒", image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ខ្លា", english: "Tiger", emoji: "🐅", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=400&fit=crop&auto=format" },
  { khmer: "កណ្តុរ", english: "Mouse", emoji: "🐁", image: "https://images.unsplash.com/photo-1543854921-1c81774b300a?w=400&h=400&fit=crop&auto=format" },
  { khmer: "សត្វស្លាប", english: "Bird", emoji: "🐦", image: "https://images.unsplash.com/photo-1555169062-013468b47731?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `animal-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "animals",
}));

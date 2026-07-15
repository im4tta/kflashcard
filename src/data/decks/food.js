/**
 * Food Deck — អាហារ
 */

export const deckMeta = {
  id: "food",
  title: "អាហារ",
  titleEnglish: "Food",
  emoji: "🍚",
  description: "Everyday food and drink words in Khmer",
  category: "vocabulary",
  order: 10,
};

const items = [
  { khmer: "បាយ", english: "Rice / Food", emoji: "🍚", image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ទឹក", english: "Water", emoji: "💧", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=400&fit=crop&auto=format" },
  { khmer: "សាច់", english: "Meat", emoji: "🍖", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ត្រី", english: "Fish", emoji: "🐟", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=400&fit=crop&auto=format" },
  { khmer: "បន្លែ", english: "Vegetables", emoji: "🥬", image: "https://images.unsplash.com/photo-1557844352-761faea5f6c8?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ផ្លែឈើ", english: "Fruit", emoji: "🍎", image: "https://images.unsplash.com/photo-1618897996318-5a901db6b5f9?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ស៊ុប", english: "Soup", emoji: "🍲", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ទឹកដោះគោ", english: "Milk", emoji: "🥛", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ស្ករ", english: "Sugar", emoji: "🍬", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop&auto=format" },
  { khmer: "នំបុ័ង", english: "Bread", emoji: "🍞", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `food-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "food",
}));

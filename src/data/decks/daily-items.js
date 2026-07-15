/**
 * Daily Items Deck — របស់របរប្រចាំថ្ងៃ
 *
 * Common everyday objects a kid encounters at home and school.
 */

export const deckMeta = {
  id: "daily-items",
  title: "របស់របរប្រចាំថ្ងៃ",
  titleEnglish: "Everyday Items",
  emoji: "🎒",
  description: "Common objects you use every day",
  category: "vocabulary",
  order: 16,
};

const items = [
  { khmer: "ទូរស័ព្ទ", english: "Phone", emoji: "📱", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format" },
  { khmer: "សៀវភៅ", english: "Book", emoji: "📖", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ប៊ិក", english: "Pen", emoji: "🖊️", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ខ្មៅដៃ", english: "Pencil", emoji: "✏️", image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400&h=400&fit=crop&auto=format" },
  { khmer: "តុ", english: "Table", emoji: "🪑", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&auto=format" },
  { khmer: "កៅអី", english: "Chair", emoji: "🪑", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop&auto=format" },
  { khmer: "កាបូប", english: "Bag", emoji: "🎒", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=400&fit=crop&auto=format" },
  { khmer: "កូនសោ", english: "Key", emoji: "🔑", image: "https://images.unsplash.com/photo-1559650656-5d1d361ad10e?w=400&h=400&fit=crop&auto=format" },
  { khmer: "នាឡិកា", english: "Clock / Watch", emoji: "⏰", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&auto=format" },
  { khmer: "លុយ", english: "Money", emoji: "💵", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ខោអាវ", english: "Clothes", emoji: "👕", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ក្រដាស", english: "Paper", emoji: "📄", image: "https://images.unsplash.com/photo-1521063642971-1456979b4a3b?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `daily-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "daily-items",
}));

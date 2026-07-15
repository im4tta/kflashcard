/**
 * Colors Deck — ពណ៌
 */

export const deckMeta = {
  id: "colors",
  title: "ពណ៌",
  titleEnglish: "Colors",
  emoji: "🎨",
  description: "Learn common colors in Khmer",
  category: "vocabulary",
  order: 8,
};

const items = [
  { khmer: "ក្រហម", english: "Red", emoji: "🔴", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400&h=400&fit=crop&auto=format" },
  { khmer: "លឿង", english: "Yellow", emoji: "🟡", image: "https://images.unsplash.com/photo-1518495978162-cf4e9e7d20c5?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ខៀវ", english: "Blue", emoji: "🔵", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop&auto=format" },
  { khmer: "បៃតង", english: "Green", emoji: "🟢", image: "https://images.unsplash.com/photo-1500417148159-68083bd7333a?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ស", english: "White", emoji: "⚪", image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ខ្មៅ", english: "Black", emoji: "⚫", image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ត្នោត", english: "Brown", emoji: "🟤", image: "https://images.unsplash.com/photo-1598452963314-b09f397a4cfa?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ស្វាយ", english: "Purple", emoji: "🟣", image: "https://images.unsplash.com/photo-1506377295352-e3154d43ea5e?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ទឹកក្រូច", english: "Orange", emoji: "🟠", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `color-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "colors",
}));

/**
 * Body Parts Deck — ផ្នែកនៃរាងកាយ
 */

export const deckMeta = {
  id: "body-parts",
  title: "ផ្នែកនៃរាងកាយ",
  titleEnglish: "Body Parts",
  emoji: "🧍",
  description: "Words for parts of the body in Khmer",
  category: "vocabulary",
  order: 11,
};

const items = [
  { khmer: "ក្បាល", english: "Head", emoji: "🧠", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភ្នែក", english: "Eye", emoji: "👁️", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ច្រមុះ", english: "Nose", emoji: "👃", image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=400&h=400&fit=crop&auto=format" },
  { khmer: "មាត់", english: "Mouth", emoji: "👄", image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ត្រចៀក", english: "Ear", emoji: "👂", image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ដៃ", english: "Hand / Arm", emoji: "✋", image: "https://images.unsplash.com/photo-1519058082700-38348a822d08?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ជើង", english: "Leg / Foot", emoji: "🦶", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop&auto=format" },
  { khmer: "សក់", english: "Hair", emoji: "💇", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `body-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "body-parts",
}));

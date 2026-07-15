/**
 * Family Deck — ក្រុមគ្រួសារ
 */

export const deckMeta = {
  id: "family",
  title: "ក្រុមគ្រួសារ",
  titleEnglish: "Family",
  emoji: "👨‍👩‍👧‍👦",
  description: "Words for family members in Khmer",
  category: "vocabulary",
  order: 7,
};

const items = [
  { khmer: "ម៉ែ", english: "Mother", emoji: "👩", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ប៉ា", english: "Father", emoji: "👨", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format" },
  { khmer: "បងប្រុស", english: "Older brother", emoji: "👦", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format" },
  { khmer: "បងស្រី", english: "Older sister", emoji: "👧", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ប្អូនប្រុស", english: "Younger brother", emoji: "👦", image: "https://images.unsplash.com/photo-1598887142481-3e0d1126b5e6?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ប្អូនស្រី", english: "Younger sister", emoji: "👧", image: "https://images.unsplash.com/photo-1594761070549-753b73d707c6?w=400&h=400&fit=crop&auto=format" },
  { khmer: "តា", english: "Grandfather", emoji: "👴", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format" },
  { khmer: "យាយ", english: "Grandmother", emoji: "👵", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09912?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `family-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "family",
}));

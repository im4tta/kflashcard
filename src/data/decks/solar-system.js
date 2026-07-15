/**
 * Solar System Deck — ប្រព័ន្ធព្រះអាទិត្យ
 *
 * The sun, moon, and eight planets. Khmer names for Mercury through Saturn
 * are the same words used for the days of the week (see days.js) — they
 * come from the traditional Khmer/Sanskrit "nine heavenly bodies"
 * (នព្វគ្រោះ). Uranus and Neptune are modern transliterations, since
 * those planets aren't part of that older naming system.
 * Verified against Khmer Wikipedia articles ភពអ៊ុយរ៉ានុស / ភពណិបទូន and
 * multiple Khmer-language science explainers (see answerkid.blogspot.com,
 * cambodiapiece.wordpress.com).
 */

export const deckMeta = {
  id: "solar-system",
  title: "ប្រព័ន្ធព្រះអាទិត្យ",
  titleEnglish: "The Solar System",
  emoji: "🪐",
  description: "The sun, moon, and eight planets in Khmer",
  category: "vocabulary",
  order: 13,
};

const items = [
  { khmer: "ព្រះអាទិត្យ", english: "Sun", emoji: "☀️", image: "https://images.unsplash.com/photo-1509420316987-d27b02f81864?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ព្រះច័ន្ទ", english: "Moon", emoji: "🌙", image: "https://images.unsplash.com/photo-1532763303805-529d595877c5?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភពពុធ", english: "Mercury", emoji: "🪐", image: "https://images.unsplash.com/photo-1614313913007-04139e4c6bba?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភពសុក្រ", english: "Venus", emoji: "🪐", image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភពផែនដី", english: "Earth", emoji: "🌍", image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភពអង្គារ", english: "Mars", emoji: "🔴", image: "https://images.unsplash.com/photo-1614313913007-04139e4c6bba?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភពព្រហស្បតិ៍", english: "Jupiter", emoji: "🪐", image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភពសៅរ៍", english: "Saturn", emoji: "🪐", image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភពអ៊ុយរ៉ានុស", english: "Uranus", emoji: "🪐", image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ភពណិបទូន", english: "Neptune", emoji: "🪐", image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `solar-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "solar-system",
}));

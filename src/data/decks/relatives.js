/**
 * Relatives Deck — សាច់ញាតិ
 *
 * Extended-family terms beyond the immediate family already covered in
 * family.js. Khmer kinship terms for aunt/uncle depend on whether the
 * relative is younger or older than your parent — ពូ/មីង for a younger
 * uncle/aunt, អ៊ំ for an older uncle or aunt of either gender. Verified
 * against Basic Khmer (Sok), Open Books/LibreTexts, and a Khmer
 * novice-level vocabulary list (studykhmer.com).
 */

export const deckMeta = {
  id: "relatives",
  title: "សាច់ញាតិ",
  titleEnglish: "Relatives",
  emoji: "👪",
  description: "Extended family words beyond mom, dad, and siblings",
  category: "vocabulary",
  order: 18,
};

const items = [
  { khmer: "ពូ", english: "Uncle (younger than parent)", emoji: "👨", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format" },
  { khmer: "មីង", english: "Aunt (younger than parent)", emoji: "👩", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&auto=format" },
  { khmer: "អ៊ំ", english: "Uncle/Aunt (older than parent)", emoji: "🧑", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ក្មួយ", english: "Nephew / Niece", emoji: "🧒", image: "https://images.unsplash.com/photo-1598887142481-3e0d1126b5e6?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ជីដូនមួយ", english: "Cousin", emoji: "🧑", image: "https://images.unsplash.com/photo-1594761070549-753b73d707c6?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ចៅ", english: "Grandchild", emoji: "👶", image: "https://images.unsplash.com/photo-1590264552512-2e0d2c6f8e3d?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ប្តី", english: "Husband", emoji: "🤵", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format" },
  { khmer: "ប្រពន្ធ", english: "Wife", emoji: "👰", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&auto=format" },
  { khmer: "កូនប្រុស", english: "Son", emoji: "👦", image: "https://images.unsplash.com/photo-1598887142481-3e0d1126b5e6?w=400&h=400&fit=crop&auto=format" },
  { khmer: "កូនស្រី", english: "Daughter", emoji: "👧", image: "https://images.unsplash.com/photo-1594761070549-753b73d707c6?w=400&h=400&fit=crop&auto=format" },
];

export const cards = items.map((item, index) => ({
  id: `relative-${index + 1}`,
  khmer: item.khmer,
  english: item.english,
  emoji: item.emoji,
  image: item.image,
  category: "relatives",
}));

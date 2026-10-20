/**
 * ============================================================================
 * ANAGUTA TRADOMODERN - DEDICATED DICTIONARY DATA (js/dictionary-data.js)
 * ============================================================================
 * 
 * HOW TO ADD A NEW WORD:
 * Simply copy and paste this template into the AnagutaDictionary array below:
 * 
 * {
 *   id: 16,
 *   word: "AnagutaWord",
 *   phonetic: "/pronunciation-guide/",
 *   partOfSpeech: "noun | verb | greeting | adjective",
 *   meaning: "English definition and meaning.",
 *   category: "Greetings & Social | Traditions & Archery | Nature & Wildlife | Family & Kinship | Food & Cuisine | Numbers & Living",
 *   exampleAnaguta: "Example sentence in Anaguta.",
 *   exampleEnglish: "English translation of the example sentence.",
 *   audioPath: "audio/word.mp3"
 * },
 * 
 * ============================================================================
 */

const AnagutaDictionary = [
  {
    id: 1,
    word: "Ujah",
    phonetic: "/oo-JAH/",
    partOfSpeech: "noun",
    meaning: "The paramount monarch, royal ruler, and custodian of the Anaguta Kingdom.",
    category: "Traditions & Archery",
    exampleAnaguta: "Ujah Anaguta tiri ku rigiza nishi.",
    exampleEnglish: "The Ujah of Anaguta blesses the harvest of the people.",
    audioPath: "audio/ishokori.mp3"
  },
  {
    id: 2,
    word: "Ata",
    phonetic: "/ah-tah/",
    partOfSpeech: "noun",
    meaning: "Mr.",
    category: "Greetings & Social",
    exampleAnaguta: "Ata John Doe.",
    exampleEnglish: "Mr John Doe.",
    audioPath: "audio/kinaru.mp3"
  },
  {
    id: 3,
    word: "Amba",
    phonetic: "/am-BAH/",
    partOfSpeech: "noun",
    meaning: "Mrs.",
    category: "Greetings & Social",
    exampleAnaguta: "Amba John Doe.",
    exampleEnglish: "Mrs John Doe",
    audioPath: "audio/mba.mp3"
  },
  {
    id: 4,
    word: "Dada",
    phonetic: "/dah-dah/",
    partOfSpeech: "noun",
    meaning: "Father.",
    category: "Family & Kinship",
    exampleAnaguta: "Dada um rạn avarah.",
    exampleEnglish: "My father knows how to farm.",
    audioPath: "audio/tukwi.mp3"
  },
  {
    id: 5,
    word: "Ango",
    phonetic: "/an-gwo/",
    partOfSpeech: "noun",
    meaning: "Mother.",
    category: "noun",
    exampleAnaguta: "Ango um rạn ashira.",
    exampleEnglish: "My mother knows how to cook.",
    audioPath: "audio/gwash.mp3"
  },
  {
    id: 6,
    word: "Asusa",
    phonetic: "/Aah-su-sir/",
    partOfSpeech: "noun",
    meaning: "House.",
    category: "Nature & Wildlife",
    exampleAnaguta: "Pir mah um na'susa.",
    exampleEnglish: "I'm going to the house.",
    audioPath: "audio/biro.mp3"
  },
  {
    id: 7,
    word: "udətar",
    phonetic: "/ou-tha-ta-r/",
    partOfSpeech: "noun",
    meaning: "Chair",
    category: "Nature & Wildlife",
    exampleAnaguta: "Rau na tashi nu'dətar.",
    exampleEnglish: "Come and sit on the chair.",
    audioPath: "audio/shanu.mp3"
  },
  {
    id: 8,
    word: "Ure",
    phonetic: "/ou-ri/",
    partOfSpeech: "noun",
    meaning: "Rain",
    category: "Nature & Wildlife",
    exampleAnaguta: "Ure nu pko.",
    exampleEnglish: "rain is falling.",
    audioPath: "audio/zana.mp3"
  }
];

// Export to window for global access
if (typeof window !== 'undefined') {
  window.AnagutaDictionary = AnagutaDictionary;
  window.AnagutaWords = AnagutaDictionary;
}

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
    meaning: "Mr - a respectful title used before a man's name. (It is short for mister).",
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
    word: "Udətar",
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
  },
  {
    id: 9,
    word: "Ugura kpə",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Unity",
    category: "Nature & Wildlife",
    exampleAnaguta: "Ugura kpə nazhi uria tuba.",
    exampleEnglish: "Unity is progress.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 10,
    word: "Undiganu",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Elder",
    category: "Nature & Wildlife",
    exampleAnaguta: "Undo di undiganu.",
    exampleEnglish: "This man is an elder.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 11,
    word: "Usu",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Mortar",
    category: "Nature & Wildlife",
    exampleAnaguta: "Na yam usu.",
    exampleEnglish: "Come and give me the mortar",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 12,
    word: "Uʒhunu",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Pestle",
    category: "Nature & Wildlife",
    exampleAnaguta: "ka chiram uʒhunu.",
    exampleEnglish: "Go and get me the pestle.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 13,
    word: "Usaka",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "River",
    category: "Nature & Wildlife",
    exampleAnaguta: "Pirma goro na ahwu, tu wungulu 'saka.",
    exampleEnglish: "We are going to Grandma's place but we will cross the river.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 14,
    word: "Unabizu",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Hunter ",
    category: "Nature & Wildlife",
    exampleAnaguta: "Undọ di unabizu.",
    exampleEnglish: "This man is a hunter.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 15,
    word: "Næ izu",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Yesterday ",
    category: "Nature & Wildlife",
    exampleAnaguta: "Nǝ izu tini hanandu ni ra u bisa ǝzhi.",
    exampleEnglish: "Yesterday we went to church .",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 16,
    word: "Ufoto",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Wound",
    category: "Nature & Wildlife",
    exampleAnaguta: "usharai uhm nu'foto.",
    exampleEnglish: "My husband has a wound.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 17,
    word: "Ukangkang",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Plate",
    category: "Nature & Wildlife",
    exampleAnaguta: "In kpa ukangkang.",
    exampleEnglish: "I bought a plate.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 18,
    word: "Basha",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Girl ",
    category: "Nature & Wildlife",
    exampleAnaguta: "Basha di ran ashira.",
    exampleEnglish: "This girl knows how to cook.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 19,
    word: "Ashoko",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Bag ",
    category: "Nature & Wildlife",
    exampleAnaguta: "In kpa ashoko ni ri' ʒhamin.",
    exampleEnglish: "I bought a bag in the market.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 20,
    word: "Iria",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Food ",
    category: "Nature & Wildlife",
    exampleAnaguta: "In rin zi iria ko yan du wen.",
    exampleEnglish: "I eat food everyday.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 21,
    word: "Ituma",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Plate",
    category: "Nature & Wildlife",
    exampleAnaguta: "Pir mum ni ri 'tuma.",
    exampleEnglish: "I am going to work.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 22,
    word: "Ulam",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Farm ",
    category: "Nature & Wildlife",
    exampleAnaguta: "Pir mhum nu 'lam.",
    exampleEnglish: "I am going to the farm..",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 23,
    word: "Rəkpæ",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Head",
    category: "Nature & Wildlife",
    exampleAnaguta: "Rəkpæ rum nu puba .",
    exampleEnglish: "I am having headache.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 24,
    word: "Rəʒi",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Eye ",
    category: "Nature & Wildlife",
    exampleAnaguta: "Ban rika na rəʒi ruwændæ wu.",
    exampleEnglish: "I can't see with one eye.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 25,
    word: "əʒi",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Eyes ",
    category: "Nature & Wildlife",
    exampleAnaguta: "əʒi aw sara'.",
    exampleEnglish: "Your eyes are beautiful.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 26,
    word: "Bimu",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Nose ",
    category: "Nature & Wildlife",
    exampleAnaguta: "em na bimu bu gaybu.",
    exampleEnglish: "I have a long nose.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 27,
    word: "Ututo",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Ear ",
    category: "Nature & Wildlife",
    exampleAnaguta: "Uʒi ututo um nu puba.",
    exampleEnglish: "One of my ear is paining me.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 28,
    word: "Unu",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Mouth ",
    category: "Nature & Wildlife",
    exampleAnaguta: "Imi nunu ouw?.",
    exampleEnglish: "What is in your mouth?",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 29,
    word: "rəɲin",
    phonetic: "//",
    partOfSpeech: "noun",
    meaning: "Tooth ",
    category: "Nature & Wildlife",
    exampleAnaguta: "rəɲin rom nu zuhu.",
    exampleEnglish: "My tooth is shaking",
    audioPath: "audio/zana.mp3"
  },
];

// Export to window for global access
if (typeof window !== 'undefined') {
  window.AnagutaDictionary = AnagutaDictionary;
  window.AnagutaWords = AnagutaDictionary;
}

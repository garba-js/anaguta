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
    audioPath: "audio/ujah.mp3"
  },
  {
    id: 2,
    word: "Kinaru",
    phonetic: "/kee-NAH-roo/",
    partOfSpeech: "noun",
    meaning: "Heritage, ancestral lineage, or the unbroken cultural identity of the Anaguta people.",
    category: "Traditions & Archery",
    exampleAnaguta: "Kinaru ka Anaguta bu re zamani.",
    exampleEnglish: "The heritage of Anaguta stands firm across generations.",
    audioPath: "audio/kinaru.mp3"
  },
  {
    id: 3,
    word: "Mba",
    phonetic: "/m-BAH/",
    partOfSpeech: "greeting",
    meaning: "Traditional greeting of respect; hello, greetings, or welcome.",
    category: "Greetings & Social",
    exampleAnaguta: "Mba ba baki nashi!",
    exampleEnglish: "Greetings and welcome to our esteemed guests!",
    audioPath: "audio/mba.mp3"
  },
  {
    id: 4,
    word: "Tukwi",
    phonetic: "/TOO-kwee/",
    partOfSpeech: "noun",
    meaning: "Traditional hunting and war bow, hand-carved from seasoned acacia wood.",
    category: "Traditions & Archery",
    exampleAnaguta: "Tukwi ka babi ri ka taba kpe.",
    exampleEnglish: "The bow of our forefathers protected the hills with courage.",
    audioPath: "audio/tukwi.mp3"
  },
  {
    id: 5,
    word: "Gwash",
    phonetic: "/GWAH-sh/",
    partOfSpeech: "noun",
    meaning: "Granite hills, rocky plateau outcrop, or natural highland fortress.",
    category: "Nature & Wildlife",
    exampleAnaguta: "Gwash Naraguta da gari mai sanyi.",
    exampleEnglish: "The granite hills of Naraguta cradle our ancient settlements.",
    audioPath: "audio/gwash.mp3"
  },
  {
    id: 6,
    word: "Miri",
    phonetic: "/MEE-ree/",
    partOfSpeech: "noun",
    meaning: "Fresh spring water, flowing highland river, or sacred brook.",
    category: "Nature & Wildlife",
    exampleAnaguta: "Miri kaza ri ka sha'an kano.",
    exampleEnglish: "The cool mountain water refreshes the traveling archer.",
    audioPath: "audio/miri.mp3"
  },
  {
    id: 7,
    word: "Biro",
    phonetic: "/BEE-roh/",
    partOfSpeech: "noun",
    meaning: "Family compound, household hearth, or ancestral homestead.",
    category: "Family & Kinship",
    exampleAnaguta: "Biro ka dodo na zama lafiya.",
    exampleEnglish: "Peace and harmony reside within our grandfather's homestead.",
    audioPath: "audio/biro.mp3"
  },
  {
    id: 8,
    word: "Shanu",
    phonetic: "/SHAH-noo/",
    partOfSpeech: "greeting",
    meaning: "Peaceful morning greeting; 'Did you wake well?'",
    category: "Greetings & Social",
    exampleAnaguta: "Shanu gari, mun gode Ubangiji.",
    exampleEnglish: "Good morning; we give thanks for the sunrise.",
    audioPath: "audio/shanu.mp3"
  },
  {
    id: 9,
    word: "Zana",
    phonetic: "/ZAH-nah/",
    partOfSpeech: "noun",
    meaning: "Fonio (Acha grain), the sacred indigenous cereal cultivated on Jos Plateau.",
    category: "Food & Cuisine",
    exampleAnaguta: "Zana na ba da lafiya da karfi.",
    exampleEnglish: "Fonio grain brings nourishment and strength to our youth.",
    audioPath: "audio/zana.mp3"
  },
  {
    id: 10,
    word: "Nishi",
    phonetic: "/NEE-shee/",
    partOfSpeech: "noun",
    meaning: "The Anaguta people collectively; community, brotherhood, and kin.",
    category: "Family & Kinship",
    exampleAnaguta: "Nishi Anaguta suna son juna.",
    exampleEnglish: "The Anaguta people stand united in fraternal love.",
    audioPath: "audio/nishi.mp3"
  },
  {
    id: 11,
    word: "Igbun",
    phonetic: "/EENG-boon/",
    partOfSpeech: "noun",
    meaning: "Arrow quiver woven from treated hide and vegetal fiber, slung over the shoulder.",
    category: "Traditions & Archery",
    exampleAnaguta: "Igbun nashi cike yake da kibau.",
    exampleEnglish: "His quiver is filled with seasoned arrows of precision.",
    audioPath: "audio/igbun.mp3"
  },
  {
    id: 12,
    word: "Kuta",
    phonetic: "/KOO-tah/",
    partOfSpeech: "noun",
    meaning: "Traditional terra-cotta clay pot, skillfully molded by Naraguta master potters.",
    category: "Food & Cuisine",
    exampleAnaguta: "Kuta ta adana ruwan sha mai sanyi.",
    exampleEnglish: "The earthenware pot keeps drinking water naturally cool.",
    audioPath: "audio/kuta.mp3"
  },
  {
    id: 13,
    word: "Ran",
    phonetic: "/RAHN/",
    partOfSpeech: "noun",
    meaning: "Sun, dawn light, or new day.",
    category: "Numbers & Living",
    exampleAnaguta: "Ran ta fito a bayan duwatsun Jos.",
    exampleEnglish: "The sun rises gracefully behind the Jos hills.",
    audioPath: "audio/ran.mp3"
  },
  {
    id: 14,
    word: "Watash",
    phonetic: "/WAH-tash/",
    partOfSpeech: "noun",
    meaning: "Moon, lunar month, or the harvest night festival cycle.",
    category: "Numbers & Living",
    exampleAnaguta: "Watash ya cika da hasken dare.",
    exampleEnglish: "The full moon illuminates the nighttime cultural dance.",
    audioPath: "audio/watash.mp3"
  },
  {
    id: 15,
    word: "San-Kpa",
    phonetic: "/SAHN-kpah/",
    partOfSpeech: "greeting",
    meaning: "Parting farewell; 'Go in strength and peace.'",
    category: "Greetings & Social",
    exampleAnaguta: "San-kpa, har sai mun sake haduwa.",
    exampleEnglish: "Farewell in peace, until our paths cross once again.",
    audioPath: "audio/san-kpa.mp3"
  },
  {
    id: 16,
    word: "Ishokori",
    phonetic: "/ee-shoh-KOH-ree/",
    partOfSpeech: "noun",
    meaning: "The sacred annual harvest thanksgiving festival and archery celebration of the Anaguta people.",
    category: "Traditions & Archery",
    exampleAnaguta: "Ishokori na kawo zaman lafiya da murna.",
    exampleEnglish: "Ishokori festival brings communal peace and joyous celebration.",
    audioPath: "audio/ishokori.mp3"
  },
  {
    id: 17,
    word: "Gwat",
    phonetic: "/GWAHT/",
    partOfSpeech: "noun",
    meaning: "Traditional highland stone granary built into rock caves to preserve grains for generations.",
    category: "Nature & Wildlife",
    exampleAnaguta: "Gwat na kare hatsi daga ruwan sama.",
    exampleEnglish: "The stone granary protects harvested grains from mountain rain.",
    audioPath: "audio/gwat.mp3"
  },
  {
    id: 18,
    word: "Pozoh",
    phonetic: "/POH-zoh/",
    partOfSpeech: "noun",
    meaning: "Honorific royal title given to monarchs and respected high elders of the kingdom.",
    category: "Traditions & Archery",
    exampleAnaguta: "Pozoh Johnson Jauro Magaji shi ne Ujah Anaguta.",
    exampleEnglish: "Pozoh Johnson Jauro Magaji is the paramount Ujah of Anaguta.",
    audioPath: "audio/pozoh.mp3"
  }
];

// Export to window for global access
if (typeof window !== 'undefined') {
  window.AnagutaDictionary = AnagutaDictionary;
  window.AnagutaWords = AnagutaDictionary;
}

export enum Language {
  ALGERIAN_ARABIC = "ALGERIAN_ARABIC",
  AMHARIC = "AMHARIC",
  ASSAMESE = "ASSAMESE",
  BAVARIAN = "BAVARIAN",
  BENGALI = "BENGALI",
  BHOJPURI = "BHOJPURI",
  BURMESE = "BURMESE",
  CEBUANO = "CEBUANO",
  CHITTAGONIAN = "CHITTAGONIAN",
  CHHATTISGARHI = "CHHATTISGARHI",
  CZECH = "CZECH",
  DECCAN = "DECCAN",
  DUTCH = "DUTCH",
  EASTERN_PUNJABI = "EASTERN_PUNJABI",
  EGYPTIAN_ARABIC = "EGYPTIAN_ARABIC",
  ENGLISH = "ENGLISH",
  FRENCH = "FRENCH",
  GAN = "GAN",
  GERMAN = "GERMAN",
  GREEK = "GREEK",
  GUJARATI = "GUJARATI",
  HAKKA = "HAKKA",
  HAUSA = "HAUSA",
  HEJAZI_ARABIC = "HEJAZI_ARABIC",
  HINDI = "HINDI",
  HUNGARIAN = "HUNGARIAN",
  IGBO = "IGBO",
  INDONESIAN = "INDONESIAN",
  IRANIAN_PERSIAN = "IRANIAN_PERSIAN",
  ITALIAN = "ITALIAN",
  JAPANESE = "JAPANESE",
  JAVANESE = "JAVANESE",
  JINYU = "JINYU",
  KANNADA = "KANNADA",
  KAZAKH = "KAZAKH",
  KHMER = "KHMER",
  KINYARWANDA = "KINYARWANDA",
  KOREAN = "KOREAN",
  MAGAHI = "MAGAHI",
  MAITHILI = "MAITHILI",
  MALAY = "MALAY",
  MANDARIN = "MANDARIN",
  MALAYALAM = "MALAYALAM",
  MARATHI = "MARATHI",
  MESOPOTAMIAN_ARABIC = "MESOPOTAMIAN_ARABIC",
  MIN_BEI_CHINESE = "MIN_BEI_CHINESE",
  MIN_DONG_CHINESE = "MIN_DONG_CHINESE",
  MIN_NAN = "MIN_NAN",
  MOROCCAN_ARABIC = "MOROCCAN_ARABIC",
  NEPALI = "NEPALI",
  NIGERIAN_FULFULDE = "NIGERIAN_FULFULDE",
  NORTH_LEVANTINE_ARABIC = "NORTH_LEVANTINE_ARABIC",
  NORTHERN_KURDISH = "NORTHERN_KURDISH",
  NORTHERN_PASHTO = "NORTHERN_PASHTO",
  NORTHERN_UZBEK = "NORTHERN_UZBEK",
  ODIA = "ODIA",
  POLISH = "POLISH",
  PORTUGUESE = "PORTUGUESE",
  ROMANIAN = "ROMANIAN",
  RUSSIAN = "RUSSIAN",
  RUNDI = "RUNDI",
  SAIDI_ARABIC = "SAIDI_ARABIC",
  SANAANI_SPOKEN_ARABIC = "SANAANI_SPOKEN_ARABIC",
  SARAIKI = "SARAIKI",
  SINDHI = "SINDHI",
  SINHALA = "SINHALA",
  SOMALI = "SOMALI",
  SOUTH_AZERBAIJANI = "SOUTH_AZERBAIJANI",
  SOUTH_LEVANTINE_ARABIC = "SOUTH_LEVANTINE_ARABIC",
  SOUTHERN_PASHTO = "SOUTHERN_PASHTO",
  SPANISH = "SPANISH",
  SUDANESE_ARABIC = "SUDANESE_ARABIC",
  SUNDA = "SUNDA",
  SYLHETI = "SYLHETI",
  TAGALOG = "TAGALOG",
  TAIZZI_ADENI_ARABIC = "TAIZZI_ADENI_ARABIC",
  TAMIL = "TAMIL",
  TELUGU = "TELUGU",
  THAI = "THAI",
  TUNISIAN_ARABIC = "TUNISIAN_ARABIC",
  TURKISH = "TURKISH",
  UKRANIAN = "UKRANIAN",
  URDU = "URDU",
  UYGHUR = "UYGHUR",
  VIETNAMESE = "VIETNAMESE",
  WESTERN_PUNJABI = "WESTERN_PUNJABI",
  WU = "WU",
  XIANG_CHINESE = "ITALIAN",
  YORUBA = "YORUBA",
  YUE = "YUE",
  ZULU = "ZULU",
}

export const getResumeLanguageOptions = (): Language[] => {
  return Object.values(Language);
};

import { Pipe, PipeTransform } from "@angular/core";
import { Language } from "src/app/resume/enums/language.enum";

@Pipe({
  name: "languageDisplay",
})
export class LanguageDisplayPipe implements PipeTransform {
  transform(language: Language, ...args: any[]): string {
    switch (language) {
      case Language.ALGERIAN_ARABIC:
        return "Algerian Arabic";
      case Language.AMHARIC:
        return "Amharic";
      case Language.ASSAMESE:
        return "Assamese";
      case Language.BAVARIAN:
        return "Bavarian";
      case Language.BENGALI:
        return "Bengali";
      case Language.BHOJPURI:
        return "Bhojpuri";
      case Language.BURMESE:
        return "Burmese";
      case Language.CEBUANO:
        return "Cebuano";
      case Language.CHITTAGONIAN:
        return "Chittagonian";
      case Language.CHHATTISGARHI:
        return "Chhattisgarhi";
      case Language.CZECH:
        return "Czech";
      case Language.DECCAN:
        return "Deccan";
      case Language.DUTCH:
        return "Dutch";
      case Language.EASTERN_PUNJABI:
        return "Eastern Punjabi";
      case Language.EGYPTIAN_ARABIC:
        return "Egyptian Arabic";
      case Language.ENGLISH:
        return "English";
      case Language.FRENCH:
        return "French";
      case Language.GAN:
        return "Gan";
      case Language.GERMAN:
        return "German";
      case Language.GREEK:
        return "Greek";
      case Language.GUJARATI:
        return "Gujarati";
      case Language.HAKKA:
        return "Hakka";
      case Language.HAUSA:
        return "Hausa";
      case Language.HEJAZI_ARABIC:
        return "Hejazi Arabic";
      case Language.HINDI:
        return "Hindi";
      case Language.HUNGARIAN:
        return "Hungarian";
      case Language.IGBO:
        return "Igbo";
      case Language.INDONESIAN:
        return "Indonesian";
      case Language.IRANIAN_PERSIAN:
        return "Iranian Persian";
      case Language.ITALIAN:
        return "Italian";
      case Language.JAPANESE:
        return "Japanese";
      case Language.JAVANESE:
        return "Javanese";
      case Language.JINYU:
        return "Jinyu";
      case Language.KANNADA:
        return "Kannada";
      case Language.KAZAKH:
        return "Kazakh";
      case Language.KHMER:
        return "Khmer";
      case Language.KINYARWANDA:
        return "Kinyarwanda";
      case Language.KOREAN:
        return "Korean";
      case Language.MAGAHI:
        return "Magahi";
      case Language.MAITHILI:
        return "Maithili";
      case Language.MALAY:
        return "Malay";
      case Language.MANDARIN:
        return "Mandarin";
      case Language.MALAYALAM:
        return "Malayalam";
      case Language.MARATHI:
        return "Marathi";
      case Language.MESOPOTAMIAN_ARABIC:
        return "Mesopotamian Arabic";
      case Language.MIN_BEI_CHINESE:
        return "Min Bei Chinese";
      case Language.MIN_DONG_CHINESE:
        return "Min Dong Chinese";
      case Language.MIN_NAN:
        return "Min Nan";
      case Language.MOROCCAN_ARABIC:
        return "Moroccan Arabic";
      case Language.NEPALI:
        return "Nepali";
      case Language.NIGERIAN_FULFULDE:
        return "Nigerian Fulfulde";
      case Language.NORTH_LEVANTINE_ARABIC:
        return "North Levantine Arabic";
      case Language.NORTHERN_KURDISH:
        return "Northern Kurdish";
      case Language.NORTHERN_PASHTO:
        return "Northern Pashto";
      case Language.NORTHERN_UZBEK:
        return "Northern Uzbek";
      case Language.ODIA:
        return "Odia";
      case Language.POLISH:
        return "Polish";
      case Language.PORTUGUESE:
        return "Portuguese";
      case Language.ROMANIAN:
        return "Romanian";
      case Language.RUSSIAN:
        return "Russian";
      case Language.RUNDI:
        return "Rundi";
      case Language.SAIDI_ARABIC:
        return "Sa'idi Arabic";
      case Language.SANAANI_SPOKEN_ARABIC:
        return "Sanaani Spoken Arabic";
      case Language.SARAIKI:
        return "Saraiki";
      case Language.SINDHI:
        return "Sindhi";
      case Language.SINHALA:
        return "Sinhala";
      case Language.SOMALI:
        return "Somali";
      case Language.SOUTH_AZERBAIJANI:
        return "South Azerbaijani";
      case Language.SOUTH_LEVANTINE_ARABIC:
        return "South Levantine Arabic";
      case Language.SOUTHERN_PASHTO:
        return "Southern Pashto";
      case Language.SPANISH:
        return "Spanish";
      case Language.SUDANESE_ARABIC:
        return "Sudanese Arabic";
      case Language.SUNDA:
        return "Sunda";
      case Language.SYLHETI:
        return "Sylheti";
      case Language.TAGALOG:
        return "Tagalog";
      case Language.TAIZZI_ADENI_ARABIC:
        return "Ta'izzi-Adeni Arabic";
      case Language.TAMIL:
        return "Tamil";
      case Language.TELUGU:
        return "Telugu";
      case Language.THAI:
        return "Thai";
      case Language.TUNISIAN_ARABIC:
        return "Tunisian Arabic";
      case Language.TURKISH:
        return "Turkish";
      case Language.UKRANIAN:
        return "Ukranian";
      case Language.URDU:
        return "Urdu";
      case Language.UYGHUR:
        return "Uyghur";
      case Language.VIETNAMESE:
        return "Vietnamese";
      case Language.WESTERN_PUNJABI:
        return "Western Punjabi";
      case Language.WU:
        return "Wu";
      case Language.XIANG_CHINESE:
        return "Xiang Chinese";
      case Language.YORUBA:
        return "Yoruba";
      case Language.YUE:
        return "Yue";
      case Language.ZULU:
        return "Zulu";
      default:
        throw Error(`No display value for '${language}'`);
    }
  }
}

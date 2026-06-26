import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function useTranslation(section) {
  const { lang } = useLang();
  return translations[lang][section];
}

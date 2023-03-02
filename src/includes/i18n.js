import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import sr from "@/locales/sr.json";

export default createI18n({
  locale: "rs",
  fallbackLocale: "en",
  messages: {
    en,
    sr,
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
      },
    },
    sr: {
      currency: {
        style: "currency",
        currency: "RSD",
      },
    },
  },
});

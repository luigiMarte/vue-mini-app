import { createI18n } from "vue-i18n";
import en from "./locales/en";
import es from "./locales/es";

const i18n = createI18n({
  locale: "es", // Idioma predeterminado
  fallbackLocale: "en", // Idioma alternativo
  messages: {
    en,
    es,
  },
});

export default i18n;

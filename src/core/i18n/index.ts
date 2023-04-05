import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";

export enum LANGUAGES {
  ru = "ru",
  en = "en"
}

export const SUPPORTED_LANGUAGES = ["ru", "en"];

i18next
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: "ru",
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {escapeValue: false}
  });

import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";

export enum LANGUAGES {
  ru = "ru",
  en = "en"
}

i18next
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: "ru",
    interpolation: {escapeValue: false}
  });

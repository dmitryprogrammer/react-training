import {useTranslation} from "react-i18next";
import {LANGUAGES} from "@core/i18n";


export function App() {
  const {t, i18n} = useTranslation();

  const switchLanguage = (language: LANGUAGES): void => {
    i18n.changeLanguage(language);
  };

  return (
    <main className="container">
      <h1 className="title">{t("title")}</h1>

      Content
      <div>
        <button onClick={() => switchLanguage(LANGUAGES.en)}>{LANGUAGES.en}</button>
        <button onClick={() => switchLanguage(LANGUAGES.ru)}>{LANGUAGES.ru}</button>
      </div>
    </main>
  );
}

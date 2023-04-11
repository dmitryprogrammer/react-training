import {LANGUAGES} from "../core/i18n";
import {useTranslation} from "react-i18next";

interface LanguagesParams {
  className: string;
}

export function Languages({className}: LanguagesParams) {
  const {i18n} = useTranslation();

  const switchLanguage = (language: LANGUAGES): void => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={`buttons ${className}`}>
      <button className="button is-primary" onClick={() => switchLanguage(LANGUAGES.en)}>{LANGUAGES.en}</button>
      <button className="button is-primary" onClick={() => switchLanguage(LANGUAGES.ru)}>{LANGUAGES.ru}</button>
    </div>
  );
}

import {useTranslation} from "react-i18next";

export function Context() {
  const {t} = useTranslation(null, {keyPrefix: "contextHook"});

  return (
    <>
      <h2 className="title is-4">{t("title")}</h2>
      <p>{t("description")}</p>
    </>
  );
}

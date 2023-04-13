import {useTranslation} from "react-i18next";

export function Context() {
  const {t} = useTranslation();

  return (
    <>
      <h2 className="title is-4">{t("contextHook.title")}</h2>
      <p>{t("contextHook.description")}</p>
    </>
  );
}

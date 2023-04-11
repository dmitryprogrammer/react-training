import {useTranslation} from "react-i18next";

export function Effect() {
  const {t} = useTranslation();

  return (
    <>
      <h2 className="title is-4">{t("effectHook.title")}</h2>
      <p>{t("effectHook.description")}</p>
    </>
  );
}

import {useTranslation} from "react-i18next";

export function RefHook() {
  const {t} = useTranslation();

  return (
    <>
      <h2 className="title is-4">{t("refHook.title")}</h2>
      <p>{t("refHook.description")}</p>
    </>
  );
}

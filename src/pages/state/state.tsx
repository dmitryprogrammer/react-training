import {useTranslation} from "react-i18next";

export function State() {
  const {t} = useTranslation();

  return (
    <>
      <h2 className="title is-4">{t("stateHook.title")}</h2>
      <p>{t("stateHook.description")}</p>
    </>
  );
}

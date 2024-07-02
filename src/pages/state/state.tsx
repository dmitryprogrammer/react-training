import {useTranslation} from "react-i18next";

import {StateCounter} from "./state-counter";
import {StateForm} from "./state-form";

export function State() {
  const {t} = useTranslation(null, {keyPrefix: "stateHook"});

  return (
    <>
      <h2 className="title is-4">{t("title")}</h2>
      <p className="pb-4">{t("description")}</p>

      <StateCounter />
      <StateForm />
    </>
  );
}

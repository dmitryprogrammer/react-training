import {useTranslation} from "react-i18next";

import {StateCounter} from "./state-counter";
import {StateForm} from "./state-form";

export const COUNTER_COLORS: string[] = ["default", "red, blue", "green"];

export function State() {
  const {t} = useTranslation();

  return (
    <>
      <h2 className="title is-4">{t("stateHook.title")}</h2>
      <p className="pb-4">{t("stateHook.description")}</p>

      <StateCounter />
      <StateForm className="block mt-4" />
    </>
  );
}

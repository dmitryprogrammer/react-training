import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

export function Effect() {
  const buttonClasses: {[propertyName: number]: string} = {
    1: "is-info",
    4: "is-success",
    8: "is-warning",
    15: "is-danger",
  };
  const {t} = useTranslation(null, {keyPrefix: "effectHook"});
  const [clickCount, setClickCount] = useState(0);
  const [increaseButtonClass, setIncreaseButtonClass] = useState("is-info");

  useEffect(() => {
    for (const buttonClass in buttonClasses) {
      if (clickCount === Number(buttonClass)) {
        setIncreaseButtonClass(buttonClasses[buttonClass]);
      }
    }
  });

  return (
    <>
      <h2 className="title is-4">{t("title")}</h2>
      <p>{t("description")}</p>
      <div className="buttons mt-4">
        <button className={"button " + increaseButtonClass}
                onClick={() => setClickCount(clickCount + 1)}>{t("increaseButton")}
        </button>
      </div>

      <span>{t("clickedNotificationText", {clickCount})}</span>
    </>
  );
}

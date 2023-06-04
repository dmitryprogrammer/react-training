import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

export function Effect() {
  const buttonClasses: {[propertyName: number]: string} = {
    1: "is-info",
    4: "is-success",
    6: "is-warning",
    7: "is-danger"
  };
  const {t} = useTranslation();
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
      <h2 className="title is-4">{t("effectHook.title")}</h2>
      <p>{t("effectHook.description")}</p>
      <div className="buttons mt-4">
        <button className={"button " + increaseButtonClass}
                onClick={() => setClickCount(clickCount + 1)}>{"effectHook.increaseButton"}
        </button>
      </div>

      <span>You clicked increase {clickCount} times</span>
    </>
  );
}

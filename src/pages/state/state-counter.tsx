import {useTranslation} from "react-i18next";
import {useState} from "react";

type CountSizingAction = "inc" | "dec";

export function StateCounter() {
  const {t} = useTranslation();
  const [count, setCount] = useState(0);
  const handleCountSizing = (action: CountSizingAction) => {
    switch (action) {
      case "inc":
        setCount(count + 1);
        break;
      case "dec":
        setCount(count - 1);
        break;
    }
  };

  return (
    <div className="mt-4">
      <span>{count}</span>
      <div className="buttons mt-4">
        <button className="button is-info" onClick={() => handleCountSizing("inc")}>+</button>
        <button className="button is-info" onClick={() => handleCountSizing("dec")}>-</button>
      </div>

      <p className="mt-4">{t("stateHook.examples.counter.description-1")}</p>
    </div>
  );
}

import {KeyboardEvent, useState} from "react";
import {useTranslation} from "react-i18next";

export function StateForm() {
  const {t} = useTranslation(null, {keyPrefix: "stateHook.examples.form.name"});
  const [name, setName] = useState("");
  const [counterColor, setCounterColor] = useState(["default"]);
  const nameControlPlaceholder = t("placeholder");

  const changeName = function(e: KeyboardEvent<HTMLInputElement>): void {
    if (e?.currentTarget) {
      const inputValue: string = e.currentTarget.value;
      setName(inputValue);
    }
  };

  return (
    <form className="block mt-4">
      <div className="field">
        <label htmlFor="name_control" className="label">{t("title")}</label>

        <div className="control">
          <input className="input" type="text" onKeyUp={changeName}
                 placeholder={nameControlPlaceholder} />
        </div>
        <h3>{name}</h3>
      </div>
    </form>
  );
}

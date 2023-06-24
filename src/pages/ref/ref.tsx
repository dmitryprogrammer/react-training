import {useTranslation} from "react-i18next";
import {FormEvent, MutableRefObject, useRef, useState} from "react";

export function RefHook() {
  const {t} = useTranslation();
  const [controlState, setControlState] = useState("");
  const inputEl: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>();

  const updateControlState = (e: FormEvent<HTMLInputElement>) => {
    if (e) {
      setControlState(e.currentTarget.value);
    }
  };

  const focusStateControl = (e) => {
    if (e) {
      e.preventDefault();
    }
    inputEl.current.focus();
  };

  return (
    <>
      <h2 className="title is-4">{t("refHook.title")}</h2>
      <p>{t("refHook.description")}</p>
      <form>
        <div className="field mt-4">
          <label className="label">State</label>
          <div className="control">
            <input className="input" type="text" ref={inputEl} placeholder="Text input" value={controlState}
                   onChange={updateControlState} />
            <p>{controlState}</p>
          </div>
        </div>
        <div className="field mt-4">
          <div className="control">
            <button className="button is-info" onClick={focusStateControl}>Focus State Control</button>
          </div>
        </div>
      </form>
    </>
  );
}

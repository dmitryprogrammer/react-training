import {useTranslation} from "react-i18next";
import {Navigation, RouterConfig} from "../navigation";
import {Languages} from "../languages/languages";

export function App() {
  const {t} = useTranslation();

  return (
    <main className="container mt-5">
      <h1 className="title">{t("title")}</h1>
      <div className="columns">
        <div className="column is-9">
          <Navigation />
        </div>
        <Languages className="is-centered is-flex column is-3" />
      </div>

      <RouterConfig />
    </main>
  );
}

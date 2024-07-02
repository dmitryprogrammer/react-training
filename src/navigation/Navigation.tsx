import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";

interface NavState {
  link: string;
  title: string;
}

export function Navigation() {
  const INIT_NAV_STATE: NavState[] = [
    {link: "/non-hook", title: "nav.non-hook"},
    {link: "/", title: "nav.state"},
    {link: "/effect", title: "nav.effect"},
    {link: "/context", title: "nav.context"},
    {link: "/ref", title: "nav.ref"},
    {link: "/calc", title: "nav.calc"},
  ];

  const {t} = useTranslation();
  const [navState] = useState(INIT_NAV_STATE);

  return (
    <nav className="tabs">
      <ul>
        {navState
          ?.map((navItem: NavState, index: number) =>
            <NavLink to={navItem.link} key={index}>
              {({isActive}: {isActive: boolean}) => (<li key={index} className={isActive ? "is-active" : ""}>
                {t(navItem.title)}
              </li>)}
            </NavLink>
          )
        }
      </ul>
    </nav>
  );
}

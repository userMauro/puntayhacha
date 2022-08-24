// react-redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from "../redux/slice";

// lang
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

// css
import "./Styles/Nav.css"

// assets
import profile from "../assets/logo-puntayhacha-blanco.png"
import iconENG from "../assets/lang/eng.png";
import iconESP from "../assets/lang/esp.png";

export default function Nav () {
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.rootReducer.lang);

    return (
        <div className="navigation">
            <a href="puntayacha.com.ar" className="brand-name">
                <img className="logo" src={profile} alt="profile" />
            </a>
            <div className="navigation-menu">
                    <div className="navbutton">
                        <a className="link" href="#aboutus">{lang === "ESP" ? ESP.Nav.us : ENG.Nav.us}</a>
                    </div>
                    <div className="navbutton">
                        <a className="link" href="#contactus">{lang === "ESP" ? ESP.Nav.contact : ENG.Nav.contact}</a>
                    </div>
                    <div className="navbutton">
                        <a className="link" href="#certificates">{lang === "ESP" ? ESP.Nav.certificates : ENG.Nav.certificates}</a>
                    </div>
            </div>

            <div className="nav-lang-container">
                <img title="ESP" className="nav-lang-icons" src={iconESP} alt='iconESP' onClick={() => dispatch(setLanguage("ESP"))} />
                <img title="ENG" className="nav-lang-icons" src={iconENG} alt='iconENG' onClick={() => dispatch(setLanguage("ENG"))}/>
            </div>
        </div>
    );
}
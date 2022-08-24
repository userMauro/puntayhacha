// react-redux
import { useSelector } from 'react-redux';

// lang
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

// css
import "./Styles/AboutUs.css"

// clients
import icon_tresases from "../assets/clients/tresases.png";
import icon_mazul from "../assets/clients/mazul.png";

export default function AboutUs () {
    const lang = useSelector((state) => state.rootReducer.lang);

    return (
        <div className="AboutUs">
            <a style={{visibility: "hidden"}} name="aboutus" href="www.puntayhacha.com.ar">contactus</a>
            <section id ="aboutus"></section>

            <p className="aboutus-title">{lang === "ESP" ? ESP.About.title : ENG.About.title}</p>

            <div className="aboutus-content">
                <p className="aboutus-description">{lang === "ESP" ? ESP.About.content : ENG.About.content}</p>
                <p className="aboutus-description">{lang === "ESP" ? ESP.About.providers : ENG.About.providers}</p>
                <div className="aboutus-clients">
                    <div className="aboutus-clients-logo">
                        <img title="Tres Ases" className="aboutus-imgs-clients" src={icon_tresases} alt='icon_tresases' />
                        <img title="Moño azul" className="aboutus-imgs-clients" src={icon_mazul} alt='icon_mazul' />
                    </div>
                </div>
            </div>
        </div>
    )
};
// react-redux
import { useSelector } from 'react-redux';

// lang
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

// css
import "./Styles/Footer.css";

// assets
import C from "../assets/C.ico";
import M from "../assets/M.ico";

export default function Footer() {
    const lang = useSelector((state) => state.rootReducer.lang);

    return (
        <div className="Footer">
            <div className="footer-container">
                <div>{lang === "ESP" ? ESP.Footer.direction : ENG.Footer.direction}</div>

                <div className="footer-design">
                    <p>{lang === "ESP" ? ESP.Footer.design : ENG.Footer.design}</p> 
                    <a href="https://portfolio-ilqfe9r0l-crisvalhas.vercel.app/" rel="noreferrer" target="_blank"> 
                        <img className="footer-imgs" src={C} alt="c"/>
                    </a> 
                    <a href="https://portfolio-git-main-usermauro.vercel.app/" rel="noreferrer" target="_blank"> 
                        <img className="footer-imgs" src={M}  alt="M"/>
                    </a>
                </div>

            </div>
            <div className="footer-copyright">
                <div>{lang === "ESP" ? ESP.Footer.copyright : ENG.Footer.copyright}</div>
            </div>
        </div>
    )
};
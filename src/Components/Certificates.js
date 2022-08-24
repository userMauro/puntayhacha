// react-redux
import { useSelector } from 'react-redux';

// lang
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

// css
import "./Styles/Certificates.css";

// assets
import icon_globalgap from "../assets/certificates/globalgap.png";
import icon_ecocert from "../assets/certificates/ecocertif.png";
import icon_ue from "../assets/certificates/uecert.png";
import icon_oia from "../assets/certificates/oia.png";
import icon_usda from "../assets/certificates/usda.png";
import icon_orgarg from "../assets/certificates/orgarg.png";
import icon_canada from "../assets/certificates/canadaorganic.png";

export default function Certificates () {
    const lang = useSelector((state) => state.rootReducer.lang);

    return (
        <div className="Certificates">
            <h1 className="certificates-labels">{lang === "ESP" ? ESP.Certificates.title : ENG.Certificates.title}</h1>

            <div className="certificates-container">
                <img title="Global Gap" className="certificates-imgs" src={icon_globalgap} alt='icon_globalgap' />
                <img title="Eco Cert" className="certificates-imgs" src={icon_ecocert} alt='icon_ecocert' />
                <img title="UE" className="certificates-imgs-ue" src={icon_ue} alt='icon_ue' />
                <img title="OIA" className="certificates-imgs" src={icon_oia} alt='icon_oia' />
                <img title="USDA Organic" className="certificates-imgs" src={icon_usda} alt='icon_usda' />
                <img title="Organico Argentina" className="certificates-imgs-orgarg" src={icon_orgarg} alt='icon_orgarg' />
                <img title="Canada Organic" className="certificates-imgs" src={icon_canada} alt='icon_canada' />
            </div>
        </div>
    )
};
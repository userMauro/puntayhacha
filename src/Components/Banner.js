// react-redux
import { useSelector } from 'react-redux';

// lang
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

// css
import "./Styles/Banner.css"

// assets
    // apples
    import icon_reddelicious from "../assets/fruits/icon-reddelicious.jpg";
    import icon_redbartlett from "../assets/fruits/icon-redbartlett.jpg";
    import icon_galagalaxy from "../assets/fruits/icon-galagalaxy.jpg";
    import icon_pinklady from "../assets/fruits/icon-crippspink-pinklady.jpg";

    // pears
    import icon_abatefetel from "../assets/fruits/icon-abatefetel.jpg";
    import icon_beurredanjou from "../assets/fruits/icon-beurredanjou.jpg";
    import icon_grannysmith from "../assets/fruits/icon-grannysmith.jpg";
    import icon_packhamstriumph from "../assets/fruits/icon-packhamstriumph.jpg";
    import icon_williamsbartlett from "../assets/fruits/icon-williams.jpg";


export default function Banner () {
    const lang = useSelector((state) => state.rootReducer.lang);

    return (
        <div className="Banner">
            <p className="banner-title">{lang === "ESP" ? ESP.Banner.title : ENG.Banner.title}</p>
            
            <div className='line'></div>
            <div className="banner-container">
                <div className="Fhover"><img title="Red Delicious" className="banner-imgs" src={icon_reddelicious} alt='icon_reddelicious' /><p className="Banner-text">Red Delicious</p></div>
                <div className="Fhover"><img title="Granny Smith" className="banner-imgs" src={icon_grannysmith} alt='icon_grannysmith' /><p className="Banner-text">Granny Smith</p></div>
                <div className="Fhover"><img title="Gala / Galaxy" className="banner-imgs" src={icon_galagalaxy} alt='icon_galagalaxy' /><p className="Banner-text">Gala /Galaxy</p></div>
                <div className="Fhover"><img title="Cripps Pink / Pink Lady" className="banner-imgs" src={icon_pinklady} alt='icon_pinklady' /><p className="Banner-text">Cripps Pink /Pink Lady</p></div>
                <div className="Fhover"><img title="Abate Fetel" className="banner-imgs" src={icon_abatefetel} alt='icon_abatefetel' /><p className="Banner-text">Abate Fetel</p></div>
                <div className="Fhover"><img title="Beurre D'Anjou" className="banner-imgs" src={icon_beurredanjou} alt='icon_beurredanjou' /><p className="Banner-text">Beurre D'Anjou</p></div>
                <div className="Fhover"><img title="Red Bartlett" className="banner-imgs" src={icon_redbartlett} alt='icon_redbartlett' /><p className="Banner-text">Red Bartlett</p></div>
                <div className="Fhover"><img title="Packham's Triumph" className="banner-imgs" src={icon_packhamstriumph} alt='icon_packhamstriumph' /><p className="Banner-text">Packham's Triumph</p></div>
                <div className="Fhover"><img title="William's - Bartlett" className="banner-imgs" src={icon_williamsbartlett} alt='icon_williamsbartlett' /><p className="Banner-text">William's-Bartlett</p></div>
            </div>
            <div className='line'></div>
        </div>
    )
};
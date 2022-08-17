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
    return (
        <div className="Banner">
            <img title="Red Delicious" className="banner-imgs" src={icon_reddelicious} alt='icon_reddelicious' />
            <img title="Red Bartlett" className="banner-imgs" src={icon_redbartlett} alt='icon_redbartlett' />
            <img title="Gala Galaxy" className="banner-imgs" src={icon_galagalaxy} alt='icon_galagalaxy' />
            <img title="Pink Lady" className="banner-imgs" src={icon_pinklady} alt='icon_pinklady' />
            <img title="Abate Fetel" className="banner-imgs" src={icon_abatefetel} alt='icon_abatefetel' />
            <img title="Beurre Danjou" className="banner-imgs" src={icon_beurredanjou} alt='icon_beurredanjou' />
            <img title="Granny Smith" className="banner-imgs" src={icon_grannysmith} alt='icon_grannysmith' />
            <img title="Packhams Triumph" className="banner-imgs" src={icon_packhamstriumph} alt='icon_packhamstriumph' />
            <img title="Williams Bartlett" className="banner-imgs" src={icon_williamsbartlett} alt='icon_williamsbartlett' />
        </div>
    )
};
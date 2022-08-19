import "./Styles/AboutUs.css"

// clients
import icon_tresases from "../assets/clients/tresases.png";
import icon_mazul from "../assets/clients/mazul.png";

export default function AboutUs () {
    return (
        <div className="AboutUs">
            <p className="aboutus-title">Nosotros</p>
            <div className="aboutus-content">
                <p className="aboutus-description">Punta y Hacha S.R.L. Es una empresa joven del Alto Valle de Rio Negro, que nace con el objetivo de abastecer al mercado global y local con alimentos de primera categoría de origen orgánico, contando con distintas certificaciones internacionales, pudiendo así evitar los plaguicidas y fertilizante sintéticos, cumpliendo con nuestras premisas más importantes las cuales son SALUD - ECOLOGIA - CUIDADO.</p>
                <p className="aboutus-description">Somos proveedores de:</p>
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
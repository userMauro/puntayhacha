import "./Styles/AboutUs.css"

// clients
import icon_tresases from "../assets/clients/tresases.png";
import icon_mazul from "../assets/clients/mazul.png";

export default function AboutUs () {
    return (
        <div className="AboutUs">
            <p className="aboutus-title">Nosotros</p>
            <div className="aboutus-content">
                <p className="aboutus-description">Cuatro generaciones forman parte del sueño que iniciaron los abuelos. El valor que nos inculcaron desde pequeños, la dedicación al trabajo, continúa a través del tiempo para brindar buenos frutos. Cada etapa tiene nuestra mirada en la cual confluyen profesionales de distinta índole con un trabajo de campo exigente y requiriendo un personal activo de aproximadamente 1500 personas.</p>
                {/* <div className="aboutus-clients">
                    <p>Somos proveedores de:</p>
                    <div className="aboutus-clients-logo">
                        <img title="Tres Ases" className="aboutus-imgs-clients" src={icon_tresases} alt='icon_tresases' />
                        <img title="Moño azul" className="aboutus-imgs-clients" src={icon_mazul} alt='icon_mazul' />
                    </div>
                </div> */}
                
            </div>
        </div>
    )
};
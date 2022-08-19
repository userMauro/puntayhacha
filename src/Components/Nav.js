import "./Styles/Nav.css"
import profile from "../assets/logo-puntayhacha-blanco.png"
export default function Nav () {

    return (
        <div className="navigation">
            <a href="puntayacha.com.ar" className="brand-name">
                <img className="logo" src={profile} alt="profile" />
            </a>
            <div className="navigation-menu">
                    <div className="navbutton">
                        <a className="link" href="#aboutus">Nosotros</a>
                    </div>
                    <div className="navbutton">
                        <a className="link" href="#contactus">Contáctanos</a>
                    </div>
                    <div className="navbutton">
                        <a className="link" href="#certificates">Certificados</a>
                    </div>
            </div>
        </div>
    );
}
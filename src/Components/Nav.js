import "./Styles/Nav.css"
import profile from "../assets/logo-puntayhacha-blanco.jpg"
export default function Nav () {

    return (
        <div className="navigation">
            <a href="puntayacha.com.ar" className="brand-name">
                <img className="picProfile" src={profile} alt="profile" />
            </a>
            <div className="navigation-menu">
                    <div className="navbutton">
                        <a className="link" href="#aboutus">About us</a>
                    </div>
                    <div className="navbutton">
                        <a className="link" href="#maps">Maps</a>
                    </div>
            </div>
        </div>
    );
}
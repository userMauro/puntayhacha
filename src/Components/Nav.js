import "./Styles/Nav.css"
import profile from "../assets/logo-puntayhacha-blanco.jpg"

export default function Nav () {

    return (
        <div className="navigation">
            <a href="/" className="brand-name">
                <img className="picProfile" src={profile} alt="profile" />
            </a>
            <div className="navigation-menu">
                    <div className="navbutton">
                        <a href="">Abaut us</a>
                    </div>
                    <div className="navbutton">
                        <a href="">Maps</a>
                    </div>
            </div>
        </div>
    );
}
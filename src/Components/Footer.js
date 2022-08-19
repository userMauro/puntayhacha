import "./Styles/Footer.css";
import C from "../assets/C.ico";
import M from "../assets/M.ico";

export default function Footer() {
    return (
        <div className="box">
            <div className="footer">
                <div className="pre">
                    <div>Ruta 151 Km 9, Cipolletti, Rio Negro, Argentina.</div>
                    <div>Web design: 
                        <a className="link" href="https://portfolio-ilqfe9r0l-crisvalhas.vercel.app/"> 
                            <img className="Devico" src={C} alt="c"/>
                        </a> 
                        <a className="link" href="https://portfolio-git-main-usermauro.vercel.app/"> 
                            <img className="Devico" src={M}  alt="M"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="desing">
                <div >(c) Punta y Hacha 2022 - All rights reserved.</div>
            </div>
        </div>
    )
};
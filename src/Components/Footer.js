import "./Styles/Footer.css";
import C from "../assets/C.ico";
import M from "../assets/M.ico";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div>Ruta 151 Km 9, Cipolletti, Rio Negro, Argentina</div>

                <div className="footer-design">
                    <p>Design</p> 
                    <a href="https://portfolio-ilqfe9r0l-crisvalhas.vercel.app/" target="_blank"> 
                        <img className="footer-imgs" src={C} alt="c"/>
                    </a> 
                    <a href="https://portfolio-git-main-usermauro.vercel.app/" target="_blank"> 
                        <img className="footer-imgs" src={M}  alt="M"/>
                    </a>
                </div>

            </div>
            <div className="footer-copyright">
                <div>(c) Punta y Hacha 2022 - All rights reserved.</div>
            </div>
        </div>
    )
};
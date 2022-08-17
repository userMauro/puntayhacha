import { useState } from "react";
import "./Styles/Landing.css";
import profile from "../assets/logo-puntayhacha-blanco.jpg"

export default function Landing () {
    const [state, setState] = useState({
        slideIndex:0,
});

    let a={
        img:"https://somoskudasai.com/wp-content/uploads/2022/04/portada_spy-x-family-33.jpg"
    };
    let b={
        img: "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/05/01/C8E3DCB0-3FE6-4B0D-8302-2B9845EFEC8B/spy-family_98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=high&format=webply"
    };
    let c={
        img:"https://as01.epimg.net/meristation/imagenes/2022/06/13/noticias/1655110766_378946_1655111034_noticia_normal.jpg"
    };

    let currentImage =[a,b,c]
    // Next-previous controls
    function plusSlides(n) {
        
        if (state.slideIndex + n === -1 ){
            return setState({
                ...state,
                slideIndex: (currentImage.length-1),
                
            });
        }
        if (state.slideIndex + n === currentImage.length){
            return setState({
            ...state,
            slideIndex: 0,
        });
        }
            return setState({
                ...state,
                slideIndex: (state.slideIndex) + n,
        });
    };
    // Thumbnail image controls
    function currentSlide(n) {
        setState({
            ...state,
            slideIndex: n,
    });
    };

    return (
        <div className="slideshow-container">
            <div className="fade">
                <img className="img" src={currentImage[state.slideIndex].img}  alt =""/>
                <div className="text">
                    <button className="plusSlides" onClick={(e)=>plusSlides(-1)}> B </button>
                        <div  className="signal">
                            <div className="avatar">
                                <a>
                                    <img className="picProfile" src={profile} alt="profile" />
                                </a>
                            </div>
                            <div className="dots" >
                                    <span className={state.slideIndex !==0? "dot": "dotActive"} onClick={(e)=>currentSlide(0)}></span>
                                    <span className={state.slideIndex !==1? "dot": "dotActive"} onClick={(e)=>currentSlide(1)}></span>
                                    <span className={state.slideIndex !==2?"dot": "dotActive"} onClick={(e)=>currentSlide(2)}></span>
                            </div>
                        </div>
                    <button className="plusSlides" onClick={(e)=>plusSlides(1)}> N </button>
                </div>
            </div>
        </div>
    )
};
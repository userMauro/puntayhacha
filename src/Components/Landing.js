import { useState } from "react";
import "./Styles/Landing.css";
// import profile from "../assets/logo-puntayhacha-blanco.jpg"
import profile from "../assets/logos/negro-sinfondo.png";
import img_one from "../assets/imgs/IMG_3752.jpg";
import img_two from "../assets/imgs/IMG_6862.png";
import img_three from "../assets/imgs/IMG_9251.png";

export default function Landing () {
    const [state, setState] = useState({
        slideIndex:0,
});

    let a={
        img: img_one
    };
    let b={
        img: img_two
    };
    let c={
        img: img_three
    };

    let currentImage =[a,b,c]
    // Next-previous controls
    function plusSlides(n) {
        const landing = document.querySelector(".landing-img");
        landing.classList.remove("landing-img");
        setTimeout(() => landing.classList.add("landing-img"), 0.2);
        
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
            <div className="landing-fade">

                <div className="landing-img-container">
                    <img className="landing-img" src={currentImage[state.slideIndex].img}  alt =""/>
                </div>
                
                <div className="text">
                    <button className="plusSlides" onClick={(e)=>plusSlides(-1)}> ◄ </button>

                        <div  className="signal">

                            <div className="avatar">
                                <img className="picProfile" src={profile} alt="profile" />
                            </div>

                            <div className="dots" >
                                <span className={state.slideIndex !==0? "dot": "dotActive"} onClick={(e)=>currentSlide(0)}></span>
                                <span className={state.slideIndex !==1? "dot": "dotActive"} onClick={(e)=>currentSlide(1)}></span>
                                <span className={state.slideIndex !==2?"dot": "dotActive"} onClick={(e)=>currentSlide(2)}></span>
                            </div>

                        </div>

                    <button className="plusSlides" onClick={(e)=>plusSlides(1)}> ► </button>
                </div>
            </div>
        </div>
    )
};
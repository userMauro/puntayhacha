// react-redux
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

// lang
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

// css
import "./Styles/ContactUs.css"

export default function ContactUs () {
    const lang = useSelector((state) => state.rootReducer.lang);

    const [state, setState] = useState({
        name: "",
        subject: "",
        message: "",
        char: 0,
    })

    // actualizo el contador de caracteres del mensaje
    useEffect(() => {
        setState({
            ...state,
            char: state.message.length
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.message])

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });

    };

    const handleOnSubmit = e => {
        e.preventDefault(e);
        if (!state.name || !state.subject || !state.message) alert('Empty fields');
        else {
            const anchor = document.querySelector('#anchor');
            anchor.click();
            setState({
                name: "",
                subject: "",
                message: "",
                char: 0,
            });
        };
    };

    return (
        <div className="ContactUs">
            <a style={{visibility: "hidden"}} name="contactus" href="www.puntayhacha.com.ar">contactus</a>

            <p className="contactus-title">{lang === "ESP" ? ESP.Contact.title : ENG.Contact.title}</p>

            <form className="contactus-form" onSubmit={handleOnSubmit}>
                <input required className='contactus-inputs' type="text" name="name" value={state.name} placeholder={lang === "ESP" ? ESP.Contact.name : ENG.Contact.name} onChange={handleChange} />
                <input required className='contactus-inputs' type="text" name="subject" value={state.subject} placeholder={lang === "ESP" ? ESP.Contact.subject : ENG.Contact.subject} onChange={handleChange} />
                <textarea required className='contactus-inputs-message' type="text" name="message" value={state.message} placeholder={lang === "ESP" ? ESP.Contact.message : ENG.Contact.message} onChange={handleChange} maxlength="600"></textarea>
                
                <div className="contactus-endform">
                    <button className='contactus-btn'>{lang === "ESP" ? ESP.Contact.send : ENG.Contact.send}</button>
                    <span className="contactus-chars">{state.char}/600</span>
                </div>

                <div style={{"font-size": "small"}}>Contacto@puntayhacha.com.ar</div>
                <a style={{visibility: "hidden"}} id="anchor" href={`mailto:Contacto@puntayhacha.com.ar?subject=${state.name}, ${state.subject}&body=${state.message}`}>correo</a>
            </form>
            
        </div>
    )
};
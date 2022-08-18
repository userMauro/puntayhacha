import React, { useEffect, useState } from "react";
import "./Styles/ContactUs.css"

export default function ContactUs () {
    const [state, setState] = useState({
        name: "",
        email: "",
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
    }, [state])

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });

    };

    const handleOnSubmit = e => {
        e.preventDefault(e);
        if (!state.name || !state.email || !state.subject || !state.message) alert('Empty fields');
        else {
            // --------> sendEmail
            setState({
                name: "",
                email: "",
                subject: "",
                message: "",
                char: 0,
            });
        };
    };

    return (
        <div className="ContactUs">
            <p>Contáctanos</p>
            <form className="contactus-form" onSubmit={handleOnSubmit}>
                <input required className='contactus-inputs' type="text" name="name" value={state.name} placeholder="Nombre" onChange={handleChange} />
                <input required className='contactus-inputs' type="text" name="email" value={state.email} placeholder="Email" onChange={handleChange} />
                <input required className='contactus-inputs' type="text" name="subject" value={state.subject} placeholder="Asunto" onChange={handleChange} />
                <textarea required className='contactus-inputs-message' type="text" name="message" value={state.message} placeholder="Mensaje" onChange={handleChange} maxlength="600"></textarea>
                <div className="contactus-endform">
                    <button className='contactus-btn'>Enviar</button>
                    <span className="contactus-chars">{state.char}/600</span>
                </div>
            </form>
            
        </div>
    )
};
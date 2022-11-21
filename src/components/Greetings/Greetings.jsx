import React from "react";

function Greetings({lang, children}) {
    let msg;
    if(lang === 'en') {
        msg = 'Hello'
    } else if (lang === 'fr') {
        msg = 'Bonjour'
    } else if (lang === 'es') {
        msg = 'Hola'
    } else if (lang === 'de') {
        msg = 'Halo'
    }
    return(
        <p> {msg}, {children} </p>
    )
}

export default Greetings
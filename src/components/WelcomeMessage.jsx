//src/components/WelcomeMessage.jsx
import React from "react";

function WelcomeMessage() {
    const userName = "Malala"; //acá se puede poner mi nombre o cualquier valor

    return(
        <h2>Hello, {userName}! Welcome to the platform.</h2>
    );
}

export default WelcomeMessage;
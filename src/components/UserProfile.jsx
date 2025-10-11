//src/components/UserProfile.jsx
import React from "react";

function UserProfile() {
    const name = "Malala Soifer";
    const description = "Frontend developer passionate about design ans user experience.";
    
    return (
        <> 
        <h2>{name}</h2>
        <p>{description}</p>
        </>
    );
}

export default UserProfile;
import { useState } from 'react';

function ColorToggle() {
     const [isRed, setisRed] = useState(false);

     const toggleColor = () => {
        setisRed(!isRed); 
     };

    return (
        <div>
         <p style={{color:isRed ? 'red' : 'black'}}>¡Este texto cambia de color!</p>        
         <button onClick={toggleColor}>Cambia color</button>
         </div>
    );
}

export default ColorToggle;
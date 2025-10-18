import { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState ('');

    return(
        <div>
        <input type="text"
        placeholder='Name' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
        <input type="text"
        placeholder='lastName' 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)}
        />

        <p>Hola,{name}{lastName}!</p>
        </div>
    );
}

export default Form;

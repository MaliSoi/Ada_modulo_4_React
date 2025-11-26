import { useState } from 'react';
import ContactList from './ContactList.jsx';



function App() {
  //estado para los contactos
  const [contactos, setContactos] = useState ([
    {nombre: "Juan Rama", telefono: "(11)5678-8976"},
    {nombre: "Teresa Toya", telefono: "(11)5987-2345"},
    {nombre: "Ramón Milano", telefono: "(11)3456-9854"},
    ]);

    //estado para los inputs del formulario
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    //Función para agregar un contacto
    const agregarContacto = (e) => {
      e.preventDefault();// evita que el formulario recargue la página

      //Validación: no permitir campos vacíos
      if (!nombre.trim() || !telefono.trim()) return;

       //Agregar nuevo contacto
      setContactos([...contactos, {nombre, telefono}]);

      //Limpiar los inputs
      setNombre('');
      setTelefono('');

      };
 
  return (
    <div className='app-container'>
      <h1>Lista de Contactos</h1>
      {/* Formulario para agregar contactos*/}
      <form onSubmit={agregarContacto} className='contact-form'>
        <input 
          type="text"
          placeholder="Nombre"
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
        <input 
          type="text"
          placeholder="Teléfono"
          value={telefono} 
          onChange={(e) => setTelefono(e.target.value)}
          />
        <button type='submit'>Agregar Contacto</button>
      </form>
      
      {/*Lista de contactos*/}
      <ContactList contactos={contactos}/>
    </div>
   );
  }

export default App;
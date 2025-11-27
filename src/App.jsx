import { useState, useEffect } from 'react';
import ContactList from './ContactList.jsx';


function App() {
  //estado para los contactos
  const [contactos, setContactos] = useState ([]);

  //estado para los inputs del formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  
  //Cargar contactos desde localStorage al iniciar la app
  useEffect(() => {
    const datos = localStorage.getItem('contactos');
    if (datos) {
      try {
      setContactos(JSON.parse(datos));
    } catch (error) {
       setContactos([]);
    }
  } else {
        setContactos([
        {nombre: "Juan Rama", telefono: "(11)5678-8976"},
        {nombre: "Teresa Toya", telefono: "(11)5987-2345"},
        {nombre: "Ramón Milano", telefono: "(11)3456-9854"},
    ]);
    }
    }, []); //se ejecuta solo una vez al montar el componente
  

   //Guardar contactos en el localStorage cada vez que cambien
   useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
   }, [contactos]); //ejecuta cada vez que cambia contactos

   
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
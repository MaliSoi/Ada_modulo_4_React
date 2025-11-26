import ContactList from './ContactList.jsx';
import ContactCard from './ContactList.jsx';


function App() {
  const contactos = [
    {nombre: "Juan Rama", teléfono: "(11)5678-8976"},
    {nombre: "Teresa Toya", teléfono: "(11)5987-2345"},
    {nombre: "Ramón Milano", teléfono: "(11)3456-9854"},
    ];
 
  return (
    <div className='app-container'>
      <h1>Lista de Contactos</h1>
      <ContactList contactos={contactos}/>
    </div>
   );
};

export default App;
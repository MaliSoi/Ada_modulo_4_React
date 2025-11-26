import { div } from "framer-motion/client";
import ContactCard from "./ContactCard.jsx";

function ContactList({contactos}) {
    return(
        <div className="contact-list">
            {contactos.map((contacto, index) => (
              <ContactCard
              key={index}   //cada elemnto necesita una key única
              name={contacto.nombre}
              phone={contacto.teléfono}
            />
            ))}
        </div>
    );   
}

export default ContactList;
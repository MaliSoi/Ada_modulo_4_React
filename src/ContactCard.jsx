

function ContactCard ({name, phone}) {
    return (
        <div className="contact-card">
            <h3>{name}</h3>
            <p>{phone}</p>
        </div>
    );
}

export default ContactCard;
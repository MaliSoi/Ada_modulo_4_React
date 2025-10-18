const Notifications = ({count})=>{
    if (count <=0) {
        return null; //acá no debe mostrar nada
    }
    return (
        <div>
        <h3>Notificaciones</h3>
        {count > 1 && <p>Tienes  {count} mensajes</p>}
        {count === 1 && <p>Tienes  {count} mensaje</p>}
        {count > 20 && <p>Responda, por favor</p>}
        </div>
    )
}

export default Notifications;


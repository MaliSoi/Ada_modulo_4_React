const Messages = ({ hasMessages }) => {
       return (
        <div>
        <h3>Mensajes</h3>
        {hasMessages && <p> Tienes nuevos mensajes</p>}
        </div>
    );
 };

export default Messages;
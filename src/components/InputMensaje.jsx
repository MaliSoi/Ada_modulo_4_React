function InputMensaje({mensaje, setMensaje}){
    return (
        <input
        type="text"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder= "Escribí un mensaje ..."
        />
    );
}

export default InputMensaje;
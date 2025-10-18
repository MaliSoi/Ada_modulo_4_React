const LoginStatus = ({ name, isLoggedIn }) => {
    // const { name, isLoggedIn } = props
if (isLoggedIn) {
        return <p>Bienvenid@, {name}</p>;
    }
        return <p>Por favor inicia sesión</p>;
        };

  export default LoginStatus;


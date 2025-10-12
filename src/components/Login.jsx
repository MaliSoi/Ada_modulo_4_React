import React from "react";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";

export default function LoginForm() {
    return (
        <Card>
            <h2>Iniciar sesión</h2>
            <Input type="text" placeholder="Usuario" />
            <Input type="password" placeholder="Contraseña" />
            <Button label="Entrar" disabled={false}/>
        </Card>
    );
}
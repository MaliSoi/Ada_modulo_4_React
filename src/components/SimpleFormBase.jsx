import "../index.css";
import {useState} from 'react';


export default function SimpleFormBase() {
  const [form, setForm] = useState({
     name: "",
    email: "",
    role: "frontend",
    active: false,
   });

  return (
    <section className="section">
      <h3>5) Formulario simple</h3>
      <form className="grid">
        <label className="grid">
          Nombre
          <input 
          name="name" 
          type="text" 
          value={form.name}
          onChange={(e)=> setForm({...form, name: e.target.value})}
          placeholder="Escribí tu nombre"
          className="input"
          />
        </label>

        <label className="grid">
          Email
          <input 
          name="email" 
          type="email" 
          value={form.email}
          onChange={(e)=> setForm({...form, email: e.target.value})}
          placeholder="email"
          className="input"
          />
        </label>

        <label className="grid">
          Rol
          <select 
          name="role" 
          className="input"
          value={form.role}
          onChange={(e) => setForm({...form, role: e.target.value})}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="design">Diseño</option>
          </select>
        </label>

        <label className="label">
          <input 
          name="active" 
          type="checkbox" 
          checked={form.active}
          onChange={(e) => setForm ({...form, active: e.target.checked})}
          />
          Activo
        </label>

        <button type="submit" className="button">
          Enviar
        </button>
      </form>
    </section>
  );
}
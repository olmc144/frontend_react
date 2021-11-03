import { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target: { value }}) => {
    setEmail(value);
  };

  const handlPasswordChange = ({ target: { value }}) => {
    setPassword(value);
  };

  const handleFormSubmit = (event) => {
    //console.log("Submit");
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`);
  };  

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>formulario</h2>
        <label htmlFor="correo">
          Correo
          <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label htmlFor="correo">
          Contraseña
          <input type="password" value={password} onChange={handlPasswordChange} />
          </label>
          <button type="submit">Entrar</button>
      </form>      
    </div>
  );
}

export default App;

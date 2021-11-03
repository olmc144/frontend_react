import { useEffect, useState } from "react";
//import './App.css';

const jsonData = [
  {
    key: "1",
    name: "Oscar"
  },
  {
    key: "2",
    name: "Liliana"
  }
];

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = ({ target: { value }}) => {
//     setEmail(value);
//   };

//   const handlPasswordChange = ({ target: { value }}) => {
//     setPassword(value);
//   };

//   const handleFormSubmit = (event) => {
//     //console.log("Submit");
//     event.preventDefault();
//     alert(`Usuario: ${email}, Password: ${password}`);
//   };  

//   return (
//     <div className="App">
//       <form onSubmit={handleFormSubmit}>
//         <h2>formulario</h2>
//         <label htmlFor="correo">
//           Correo
//           <input type="email" value={email} onChange={handleEmailChange} />
//           </label>
//           <label htmlFor="correo">
//           Contraseña
//           <input type="password" value={password} onChange={handlPasswordChange} />
//           </label>
//           <button type="submit">Entrar</button>
//       </form>      
//     </div>
//   );
// }

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  const renderData = () => {
    if(isLoading){
      return(<h2>Is Loading...</h2>);
    }
    return jsonData?.map((value) => (
      <div key={value.key}>
        <p>{value.name}</p>
      </div>
    ));
  }

  return (
    <div>
      {renderData}
    </div>
  );

}

export default App;

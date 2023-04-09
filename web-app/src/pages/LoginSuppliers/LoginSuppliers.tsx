import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";


const LoginSuppliers: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 
  const { login } = useContext(AuthContext);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response: any = null;

    try {
      response = await fetch ("http://localhost:8080/supplier/login",{
        method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
      })
      if(response.errorType) setError(response.message);
      else {
        alert("LOGADO!")
        console.log(response)
        login(response)
      }
    }
    catch(e) {
      setError(response.message);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginSuppliers;

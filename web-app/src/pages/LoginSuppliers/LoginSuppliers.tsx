import React, { useContext, useState } from "react";
import styles from './LoginSuppliers.module.css'
import { AuthContext } from "../../context/auth";
import { SimpleHeader } from "../components/header/SimpleHeader";

const LoginSuppliers: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, login } = useContext(AuthContext);

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
      response = await fetch("http://localhost:8080/supplier/login", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password })
      }).then(res => res.json())

      if (response.errorType) setError(response.message);
      else {
        alert("LOGADO!")
        console.log(response)
        login(response)
      }
    }
    catch (e) {
      setError(response.message);
    }

  };

  return (
    <div>
      <SimpleHeader />
      <form onSubmit={handleSubmit} className={styles.login}>
        <div>
          <h2>Fazer Login</h2>
          <br/>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <br/>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br/>
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginSuppliers;
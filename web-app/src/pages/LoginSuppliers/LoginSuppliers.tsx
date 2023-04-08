import React, { useState, useContext } from "react";
import AuthService from "../../services/api/auth.service";
import { AuthContext } from "../../context/auth";


const LoginSuppliers: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authService = new AuthService();
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
      response = await authService.get({ username, password }, true);
      if(response.errorType) setError(response.message);
      else login(response);
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

import {
  createContext,
  useState,
  FC,
} from "react";
import { useNavigate } from "react-router-dom";

import { Supplier, User } from '../types/user';

type LoggedUser = Partial<Supplier & User>;

type ContextData = {
  user?: LoggedUser | null;
  login?: any;
  logout?: any;
  isSupplier?: boolean;
}

export const AuthContext = createContext<ContextData>({});

const AuthProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<LoggedUser | null>(JSON.parse(localStorage.getItem('user') || "null"));
  const navigate = useNavigate();

  const login = (data: LoggedUser) => {
    setUser(data);
    window.localStorage.setItem('user', JSON.stringify(data));
    navigate(data.cnpj ? "/supplier" : "/home");
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem('user');
    navigate("/login");
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
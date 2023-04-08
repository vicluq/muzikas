import {
  createContext,
  useState,
  useEffect,
  FC,
} from "react";
import { useNavigate } from "react-router-dom";

import { Supplier, User } from '../types/user';

type LoggedUser = Partial<Supplier & User>;

type ContextData = {
  user?: LoggedUser;
  login?: any;
  logout?: any;
  isSupplier?: boolean;
}

export const AuthContext = createContext<ContextData>({});

const AuthProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<LoggedUser | undefined>(undefined);
  const navigate = useNavigate();

  const login = (data: any) => {
    setUser(data);
    window.localStorage.setItem('user', JSON.stringify(data));
    navigate("/home");
  };

  const logout = () => {
    setUser(undefined);
    window.localStorage.removeItem('user');
    navigate("/login");
  };

  useEffect(() => {
    // TODO check exp time
    let storageData = window.localStorage.getItem("user");

    if (storageData) {
      let userData: LoggedUser = JSON.parse(storageData);
      setUser(userData);
    }

    navigate("/home");
  }, []);

  const contextValue = {
    user,
    login,
    logout,
    isSupplier: !!user?.cnpj,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

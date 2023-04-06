import {
  createContext,
  useState,
  useEffect,
  FC,
} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();

  const login = (data: any) => {
    setUser(data);
    window.localStorage.setItem('user', JSON.stringify(data));
    navigate("/home");
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem('user');
    navigate("/login");
  };

  useEffect(() => {
    let userData = window.localStorage.getItem("user");

    if (userData) {
      userData = JSON.parse(userData);
      setUser(userData);
    }

    navigate("/home");
  }, []);

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

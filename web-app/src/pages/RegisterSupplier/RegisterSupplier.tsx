import { useState, useContext } from "react";
import { Header } from "../components/header/Header";
import { SupplierPayload } from "../../types/user";
import AuthService from "../../services/api/auth.service";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";

import "./Register.css";

import Plus from "./assets/Plus.png";

export const RegisterSupplier = () => {
  const [data, setData] = useState<Partial<SupplierPayload>>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const authService = new AuthService();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const inputHandler = (key: any, value: string) => {
    const newValues: any = { ...data };
    newValues[key] = value;
    setData(newValues);
  };

  const submitHandler = async () => {
    setLoading(true);
    let response: any = null;

    try {
      response = await authService.add(data, true);
      console.log(response);
      if (response.errorType) setError(response.message);
      else navigate('/supplier/login');
    } catch (e) {
      setError(response.message);
    }

    setLoading(false);
  };

  return (
    <div className="register-main-div">
      <Header />
      <div className="register">
        <div className="register-auxiliar-div">
          <div className="register-box">
            <div className="register-data">
              <div className="register-left-content">
                <div className="title">
                  <h2>Cadastre sua empresa</h2>
                </div>
                <h4>Foto de perfil</h4>
                <div className="register-left-column">
                  <label htmlFor="firstImg">
                    <i>
                      <img src={Plus}/>
                    </i>
                  </label>
                  <input
                    type="file" id="firstImg" accept=".png, .jpg, .jpeg"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      inputHandler("picture", e.target.value)
                    }
                  />
                </div>
                <div>
                  <h4 className="align-left">Descrição</h4>
                  <textarea
                    placeholder="Digite aqui sua descrição"
                    value={data.description}
                    onChange={(e) =>
                      inputHandler("description", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="register-right-content">
                <div className="register-right-line">
                  <div className="register-input">
                    <h4 className="align-left">Nome da empresa</h4>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => inputHandler("name", e.target.value)}
                    />
                  </div>
                  <div className="register-input">
                    <h4 className="align-left">E-mail</h4>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => inputHandler("email", e.target.value)}
                    />
                  </div>
                </div>
                <div className="register-right-line">
                  <div className="register-input">
                    <h4 className="align-left">Senha</h4>
                    <input
                      type="password"
                      value={data.password}
                      onChange={(e) => inputHandler("password", e.target.value)}
                    />
                  </div>
                  <div className="register-input">
                    <h4 className="align-left">Confirme a sua senha</h4>
                    <input
                      type="password"
                      value={data.confirmPassword}
                      onChange={(e) =>
                        inputHandler("confirmPassword", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="register-right-line">
                  <div className="register-input">
                    <h4 className="align-left">Endereço</h4>
                    <input
                      type="text"
                      value={data.address}
                      onChange={(e) => inputHandler("address", e.target.value)}
                    />
                  </div>
                  <div className="register-input">
                    <h4 className="align-left">Complemento</h4>
                    <input
                      type="text"
                      value={data.complement}
                      onChange={(e) =>
                        inputHandler("complement", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="register-right-line">
                  <div className="register-input">
                    <h4 className="align-left">CNPJ</h4>
                    <input
                      type="number"
                      value={data.cnpj}
                      onChange={(e) => inputHandler("cnpj", e.target.value)}
                    />
                  </div>
                  <button onClick={submitHandler} type="button">
                    Cadastre-se
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSupplier;

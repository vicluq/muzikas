import "./Register.css"
import Plus from "./assets/Plus.png"
import { Header } from "../components/header/Header";

export const Register = () => {
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
                  <button className="picture">
                    <img src={Plus}/>
                  </button>
                  <div>
                    <h4 className="align-left">Descrição</h4>
                    <textarea placeholder="Digite aqui sua descrição"/>
                  </div>
                </div>

                <div className="register-right-content">
                  <div className="register-right-line">
                    <div className="register-input">
                      <h4 className="align-left">Nome da empresa</h4>
                      <input type="text"/>
                    </div>
                    <div className="register-input">
                      <h4 className="align-left">E-mail</h4>
                      <input type="email"/>
                    </div>
                  </div>
                  <div className="register-right-line">
                    <div className="register-input">
                      <h4 className="align-left">Senha</h4>
                      <input type="password"/>
                    </div>
                    <div className="register-input">
                      <h4 className="align-left">Confirme a sua senha</h4>
                      <input type="password"/>
                    </div>
                  </div>
                  <div className="register-right-line">
                    <div className="register-input">
                      <h4 className="align-left">Endereço</h4>
                      <input type="text"/>
                    </div>
                    <div className="register-input">
                      <h4 className="align-left">Complemento</h4>
                      <input type="text"/>
                    </div>
                  </div>
                  <div className="register-right-line">
                    <div className="register-input">
                      <h4 className="align-left">CNPJ</h4>
                      <input type="number"/>
                    </div>
                    <button type="button">Cadastre-se</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
import "./Register.css"
import Plus from "./assets/Plus.png"
import { Header } from "../components/header/Header";

export const Register = () => {

  const fileToBase64 = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
     resolve(reader.result as string);
    };

    reader.readAsDataURL(file);
    reader.onerror = reject;
  });

  const onSelectFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempFileList: { fileName: string, base64String: string }[] = [];
    await Promise.all(
      [].map.call(e.target.files, async (file: File) => {
        tempFileList.push({
          fileName: file.name,
          base64String: file.type.indexOf('image') > -1 ? await fileToBase64(file) : '',
        });
      })
    );
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
                  <input type="file" id="firstImg" accept=".png, .jpg, .jpeg" style={{ display: "none" }} onChange={onSelectFiles} />
                </div>
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
                  <button type="submit" /*onClick={}*/>Cadastre-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
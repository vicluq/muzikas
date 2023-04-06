import "./Footer.css"

import logo from "./assets/Logo Muzikas (1).png"
import location from "./assets/location 1.png"
import telephone from "./assets/telephone 1.png"
import mail from "./assets/mail 1.png"

export const Footer = () => {
  return (
    <div className="footer-main-div">
      <div className="footer-left-col">
        <div className="footer-info">
          <img src={location}/>
          <h4>Avenida Conde da Boa Vista</h4>
        </div>
        <div className="footer-info">
          <img src={telephone}/>
          <h4>+55 (81) 99999-9999</h4>
        </div>
        <div className="footer-info">
          <img src={mail}/>
          <h4>muzikas@tamo.ae</h4>
        </div>
      </div>
      <div className="footer-right-col">
        <div className="footer-logo">
          <img src={logo}/>
          <h4>Muzikas Brasil Ltda. | CNPJ 00.000.000/0000-00</h4>
        </div>
      </div>
    </div>
  );
};
import { Header } from "../components/header/Header";
import { Links } from "../components/links/Links";
import { Footer } from "../components/footer/Footer";

import './MainSupplier.css';

import products from "./assets/box 1.png";
import categories from "./assets/options 1.png";
import promotions from "./assets/promotion.png";

export const MainSupplier = () => {
    return (
      <div>
        <Header />
        <Links />
        <div className="supplier-main-div">
          <div className="supplier-col">
            <h2>Sua conta</h2>
            <div className="supplier-box">
              <button className="supplier-button">
                <div className="supplier-content">
                  <img src={products}/>
                  <h3>
                    Meus
                    <br />
                    produtos
                  </h3>
                </div>
              </button>
              <button className="supplier-button">
                <div className="supplier-content">
                  <img className="supplier-my-product-img" src={categories}/>
                  <h3>
                    Minhas
                    <br />
                    categorias
                  </h3>
                </div>
              </button>
              <button className="supplier-button">
                <div className="supplier-content">
                  <img src={promotions}/>
                  <h3>
                    Minhas
                    <br />
                    promoções
                  </h3>
                </div>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  };
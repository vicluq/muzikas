import { Header } from "../components/header/Header";
import { Links } from "../components/links/Links";
import { CreateProduct } from "./createProduct/CreateProduct";
import { EditProduct } from "./editProduct/EditProduct";

import './Products.css';

import plus from "./assets/Plus.png"
import magnifyingGlass from "./assets/magnifying-glass.png"
import nothingHere from "./assets/nadaAqui.png"

// tem que fazer o if pra caso não tenha nenhuma coisa no banco, mostrar o "nothingHere"
// tem que criar dois caminhos no products-right-col: caso vá criar uma categoria (acionada ao clicar no + (mais da coluna da esquerda)) e caso vá modificar uma categoria (ao clicar numa categoria escrita no banco (será um button com o nome das categorias q vai gerar baseado nas categorias criadas no banco. Vê no Figma))

export const Products = () => {
    return (
      <div>
        <Header />
        <Links />
        <div className="products-main-div">
          <div className="products-box">
            <div className="products-left-col">
              <div className="products-left-header">
                <div className="products-left-header-first-line">
                  <h2>Produtos</h2>
                  <button><img src={plus}/></button>
                </div>
                <div className="products-line"/>
              </div>
              <div className="products-search-bar">
                <input type="text">
                </input>
                <button><img src={magnifyingGlass}/></button>
              </div>
              <div className="products">

              </div>
            </div>

            <div className="products-middle-line"/>

            <div className="products-right-col">
              <EditProduct />
            </div>
          </div>
        </div>
      </div>
    );
  };
import "./EditProduct.css";

import Plus from "../assets/Plus.png"
import magnifyingGlass from "../assets/magnifying-glass.png"

export const EditProduct = () => {
	return (
    <div className="editProduct-main-div">
      <div className="editProduct-right-header">
        <h2>Editar produto</h2>
        <div className="editProduct-line"/>
      </div>

      <div className="editProduct-content">
        <div className="editProduct-left-column">
          <label htmlFor="firstImg">
            <i>
              <img src={Plus}/>
            </i>
          </label>
          <input type="file" id="firstImg" accept=".png, .jpg, .jpeg" style={{ display: "none" }}/>
        </div>

        <div className="editProduct-right-column">
          <div className="editProduct-top">
            <div className="editProduct-input">
              <h4 className="editProduct-align-left">Nome do produto</h4>
              <input type="text"/>
            </div>
          </div>
          <div className="editProduct-bottom">
            <div>
              <h4 className="editProduct-align-left">Preço</h4>
              <input type="number"/>
            </div>
            <div>
              <h4 className="editProduct-align-left">Estoque</h4>
              <input type="number"/>
            </div>
          </div>
        </div>
      </div>

      <div className="editProduct-last-content">
        <div className="editProduct-input">
          <h4 className="editProduct-align-left">Descrição</h4>
          <textarea placeholder="Insira aqui"/>
        </div>

        <div className="editProduct-insert-categories">
          <h4 className="editProduct-align-left">Inserir categorias</h4>
          <div className="editProduct-search-bar">
            <input type="text">
            </input>
            <button><img src={magnifyingGlass}/></button>
          </div>

        </div>
      </div>

      <div className="editProduct-alert">

      </div>

      <div className="editProduct-button">
        <div className="editProduct-button-submit">
          <button type="submit">Editar</button>
        </div>

        <div className="editProduct-button-line"/>

        <div className="editProduct-button-delete">
          <button type="submit">Remover</button>
        </div>
      </div>
    </div>
	);
};
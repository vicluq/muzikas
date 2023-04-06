import "./CreateProduct.css";

import Plus from "../assets/Plus.png"
import magnifyingGlass from "../assets/magnifying-glass.png"

export const CreateProduct = () => {
	return (
		<div className="createProduct-main-div">
      <div className="createProduct-right-header">
        <h2>Criar produto</h2>
        <div className="createProduct-line"/>
      </div>

      <div className="createProduct-content">
        <div className="createProduct-left-column">
          <label htmlFor="firstImg">
            <i>
              <img src={Plus}/>
            </i>
          </label>
          <input type="file" id="firstImg" accept=".png, .jpg, .jpeg" style={{ display: "none" }}/>
        </div>

        <div className="createProduct-right-column">
          <div className="createProduct-top">
            <div className="createProduct-input">
              <h4 className="createProduct-align-left">Nome do produto</h4>
              <input type="text"/>
            </div>
          </div>
          <div className="createProduct-bottom">
            <div>
              <h4 className="createProduct-align-left">Preço</h4>
              <input type="number"/>
            </div>
            <div>
              <h4 className="createProduct-align-left">Estoque</h4>
              <input type="number"/>
            </div>
          </div>
        </div>
      </div>

      <div className="createProduct-last-content">
        <div className="createProduct-input">
          <h4 className="createProduct-align-left">Descrição</h4>
          <textarea placeholder="Insira aqui"/>
        </div>

        <div className="createProduct-insert-categories">
          <h4 className="createProduct-align-left">Inserir categorias</h4>
          <div className="createProduct-search-bar">
            <input type="text">
            </input>
            <button><img src={magnifyingGlass}/></button>
          </div>

        </div>
      </div>

      <div className="createProduct-button">
        <button type="submit">Cadastrar</button>
      </div>
    </div>
	);
};
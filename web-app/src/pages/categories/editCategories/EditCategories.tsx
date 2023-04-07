import "./EditCategories.css";

export const EditCategories = () => {
	return (
		<div className="editCategories-main-div">
      <div className="editCategories-right-header">
        <h2>Editar categoria</h2>
        <div className="editCategories-line"/>
      </div>
      <div className="editCategories-right-column">
        <div className="editCategories-input">
          <h4 className="editCategories-align-left">Nome da categoria</h4>
          <input type="text"/>
        </div>
        <div className="editCategories-input">
          <h4 className="editCategories-align-left">Descrição da categoria</h4>
          <textarea placeholder="Digite aqui sua descrição"/>
        </div>
        <div className="editCategories-button">
        <div className="editCategories-button-submit">
          <button type="submit">Editar</button>
        </div>

        <div className="editCategories-button-line"/>

        <div className="editCategories-button-delete">
          <button type="submit">Remover</button>
        </div>
      </div>
      </div>
    </div>
	);
};
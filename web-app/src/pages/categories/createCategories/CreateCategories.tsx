import "./CreateCategories.css";

export const CreateCategories = () => {
  return (
    <div className="createCategories-main-div">
      <div className="createCategories-right-header">
        <h2>Criar categoria</h2>
        <div className="createCategories-line"/>
      </div>
      <div className="createCategories-right-column">
        <div className="createCategories-input">
          <h4 className="createCategories-align-left">Nome da categoria</h4>
          <input type="text"/>
        </div>
        <div className="createCategories-input">
          <h4 className="createCategories-align-left">Descrição da categoria</h4>
          <textarea placeholder="Digite aqui sua descrição"/>
        </div>
        <div className="createCategories-button">
          <button type="button">Cadastrar</button>
        </div>
      </div>
    </div>
  );
};
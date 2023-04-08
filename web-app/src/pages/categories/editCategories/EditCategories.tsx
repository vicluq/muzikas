import { useState } from "react";
import { AddCategory } from "../../../types/category";
import "./EditCategories.css";

export const EditCategories = ({
  updateHandler,
  deleteHandler,
  category,
}: any) => {
  const [formData, setFormData] = useState<Partial<AddCategory>>({
    name: category.name,
    description: category.description,
  });

  const inputChangeHandler = (key: "name" | "description", value: string) => {
    const newValue = { ...formData };
    newValue[key] = value;

    setFormData(newValue);
  };

  return (
    <div className="editCategories-main-div">
      <div className="editCategories-right-header">
        <h2>Editar categoria</h2>
        <div className="editCategories-line" />
      </div>
      <div className="editCategories-right-column">
        <div className="editCategories-input">
          <h4 className="editCategories-align-left">Nome da categoria</h4>
          <input
            type="text"
            onChange={(e) => inputChangeHandler("name", e.target.value)}
            value={formData.name}
          />
        </div>
        <div className="editCategories-input">
          <h4 className="editCategories-align-left">Descrição da categoria</h4>
          <textarea
            placeholder="Digite aqui sua descrição"
            onChange={(e) => inputChangeHandler("description", e.target.value)}
            value={formData.description}
          />
        </div>
        <div className="editCategories-button">
          <div className="editCategories-button-submit">
            <button type="submit" onClick={() => updateHandler(category.id, formData)}>
              Editar
            </button>
          </div>

          <div className="editCategories-button-line" />

          <div className="editCategories-button-delete">
            <button type="submit" onClick={() => deleteHandler(category.id)}>
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategories;

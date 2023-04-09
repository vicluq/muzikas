import { useState } from "react";
import { AddCategory } from "../../../types/category";
import "./CreateCategories.css";

export const CreateCategories = ({ createHandler }: any) => {
  const [formData, setFormData] = useState<Partial<AddCategory>>({});

  const inputChangeHandler = (key: "name" | "description", value: string) => {
    const newValue = { ...formData };
    newValue[key] = value;

    setFormData(newValue);
  };

  return (
    <div className="createCategories-main-div">
      <div className="createCategories-right-header">
        <h2>Criar categoria</h2>
        <div className="createCategories-line" />
      </div>
      <div className="createCategories-right-column">
        <div className="createCategories-input">
          <h4 className="createCategories-align-left">Nome da categoria</h4>
          <input
            type="text"
            onChange={(e) => inputChangeHandler("name", e.target.value)}
            value={formData.name}
          />
        </div>
        <div className="createCategories-input">
          <h4 className="createCategories-align-left">
            Descrição da categoria
          </h4>
          <textarea
            placeholder="Digite aqui sua descrição"
            onChange={(e) => inputChangeHandler("description", e.target.value)}
            value={formData.description}
          />
        </div>
        <div className="createCategories-button">
          <button onClick={() => createHandler(formData)} type="button">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

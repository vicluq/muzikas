import { useContext, useState, useEffect } from "react";
import { Header } from "../components/header/Header";
import { Links } from "../components/links/Links";
import { EditCategories } from "./editCategories/EditCategories";
import { CreateCategories } from "./createCategories/CreateCategories";

import { AddCategory, Category } from "./../../types/category";
import "./Categories.css";

import plus from "./assets/Plus.png";
import magnifyingGlass from "./assets/magnifying-glass.png";
import nothingHere from "./assets/nadaAqui.png";
import { AuthContext } from "../../context/auth";
import CategoryService from "../../services/api/category.service";

export const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { user } = useContext(AuthContext);
  const categoryService = new CategoryService(user.token);

  const getCategories = async () => {
    setLoading(true);
    let response: any = null;

    try {
      response = await categoryService.getAll();
      if (response.errorType) {
        setFeedback(response.message);
        setError(true);
      } else {
        setCategories(response);
      }
    } catch (e) {
      setFeedback(response.message);
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createHandler = async (data: AddCategory) => {
    setLoading(true);
    let response: any = null;

    try {
      response = await categoryService.add(data);
      setFeedback(response.message);
      if (response.errorType) setError(true);
    } catch (e) {
      setFeedback(response.message);
      setError(true);
    }
    
    getCategories();
    setLoading(false);
  };

  const updateHandler = async (id: number, data: Partial<AddCategory>) => {
    setLoading(true);
    let response: any = null;

    try {
      response = await categoryService.update(id, data);
      setFeedback(response.message);
      if (response.errorType) setError(true);

      setCategories(() => {
        const index = categories.findIndex((cat) => cat.id === id);
        const newCategories = [...categories];
        newCategories[index] = { ...newCategories[index], ...data };
        setSelectedId(null);
        return newCategories;
      });
    } catch (e) {
      setFeedback(response.message);
      setError(true);
    }

    setLoading(false);
  };

  const deleteHandler = async (id: number) => {
    setLoading(true);
    let response: any = null;

    try {
      response = await categoryService.delete(id);
      setFeedback(response.message);
      if (response.errorType) setError(true);
      setCategories(() => {
        return categories.filter((cat) => cat.id !== id);
      });
    } catch (e) {
      setFeedback(response.message);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div>
      <Header />
      <Links />
      <div className="categories-main-div">
        <div className="categories-box">
          <div className="categories-left-col">
            <div className="categories-left-header">
              <div className="categories-left-header-first-line">
                <h2>Categorias</h2>
                <button>
                  <img src={plus} />
                </button>
              </div>
              <div className="categories-line" />
            </div>
            <div className="categories-search-bar">
              <input type="text" onChange={(e) => setSearch(e.target.value)} />
              <button>
                <img src={magnifyingGlass} />
              </button>
            </div>
            <div className="categories">
              {/* TODO create category card */}
              {search
                ? categories
                    .filter((cat) => cat.name.includes(search))
                    .map((cat) => <h2>{cat.name}</h2>)
                : categories.map((cat) => <h2>{cat.name}</h2>)}
            </div>
          </div>
          <div className="categories-middle-line" />
          <div className="categories-right-col">
            {selectedId ? (
              <EditCategories
                updateHandler={updateHandler}
                deleteHandler={deleteHandler}
                category={categories.find(cat => cat.id === selectedId)}
              />
            ) : (
              <h2>Selecione uma categoria.</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

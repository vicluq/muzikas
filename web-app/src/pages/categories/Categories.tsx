import { Header } from "../components/header/Header";
import { Links } from "../components/links/Links";
import { CreateCategories } from "./createCategories/CreateCategories";

import './Categories.css';

import plus from "./assets/Plus.png"
import magnifyingGlass from "./assets/magnifying-glass.png"
import nothingHere from "./assets/nadaAqui.png"

export const Categories = () => {
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
                  <button><img src={plus}/></button>
                </div>
                <div className="categories-line"/>
              </div>
              <div className="categories-search-bar">
                <input type="text">
                </input>
                <button><img src={magnifyingGlass}/></button>
              </div>
              <div className="categories">
              </div>
            </div>
            <div className="categories-middle-line"/>
            <div className="categories-right-col">
              <CreateCategories />
            </div>
          </div>
        </div>
      </div>
    );
  };
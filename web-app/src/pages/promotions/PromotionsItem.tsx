import React, { useState } from "react";
import { Promotion } from "./promotion.type";

interface PromotionItemProps {
    promotion: Promotion;
    onSave: (promotion: Promotion) => void;
    onDelete: () => void;
}

const PromotionItem = ({ promotion, onSave, onDelete }: PromotionItemProps) => {
    const [name, setName] = useState(promotion.name);
    const [value, setValue] = useState(promotion.value);
    const [category, setCategory] = useState(promotion.category);
    const [active, setActive] = useState(promotion.active);
    const [showForm, setShowForm] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updatedPromotion = {
            ...promotion,
            name,
            value,
            category,
            active,
        };
        const comparePromotions = (newPromotion: Promotion, oldPromotion: Promotion) => {
            const oldPromotionsValues = Object.values(oldPromotion)
            return Object.values(newPromotion).filter((newPromoValue, idx) => {
                return oldPromotionsValues[idx] !== newPromoValue
            }).length > 0;
        }
        if (comparePromotions(updatedPromotion, promotion)) {
            alert("Promoção modificada")
            onSave(updatedPromotion);
        }
        setShowForm(false)
    }
    const handleEditClick = () => {
        setShowForm(true)
    }
    return (
        <>
            {!showForm && (
                <button onClick={handleEditClick}>Edit</button>
            )}
            {showForm && (<form onSubmit={handleSubmit} className="form-container">
                <div className="form-row">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="value">Value:</label>
                    <input
                        type="number"
                        id="value"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="form-input"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="active">Active:</label>
                    <input
                        type="checkbox"
                        id="active"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                        className="form-input"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" onClick={onDelete} className="btn btn-danger">Delete</button>
                </div>
            </form>)}
        </>
    );
};
export default PromotionItem;
import React, { useState } from "react";
import { Promotion } from "./promotion.type";

interface PromotionItemProps {
    promotion: Promotion;
    onUpdate: (promotion: Promotion) => void;
    onDelete: () => void;
}

const PromotionItem = ({ promotion, onUpdate, onDelete }: PromotionItemProps) => {
    const [name, setName] = useState(promotion.name);
    const [user, setUser] = useState(promotion.user);
    const [value, setValue] = useState(promotion.value);
    const [isPercent, setIsPercent] = useState(promotion.isPercent);
    const [category, setCategory] = useState(promotion.category);
    const [active, setActive] = useState(promotion.active);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
    onUpdate({
        ...promotion,
        name,
        user,
        value,
        isPercent,
        category,
        active,
    });
    return (
        <li>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    User:
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </label>
                <label>
                    Value:
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                    />
                </label>
                <label>
                    Is Percent:
                    <input
                        type="checkbox"
                        checked={isPercent}
                        onChange={(e) => setIsPercent(e.target.checked)}
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </label>
                <label>
                    Active:
                    <input
                        type="checkbox"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                    />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={onDelete}>
                    Delete
                </button>
            </form>
        </li>
    );
};
export default PromotionItem;
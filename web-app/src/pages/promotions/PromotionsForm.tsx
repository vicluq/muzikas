import React, { useState } from "react";
import { Promotion } from "./promotion.type";

interface PromotionFormProps {
    onSubmit: (promotion: Promotion) => void;
}

const PromotionForm = ({ onSubmit }: PromotionFormProps) => {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [value, setValue] = useState(0);
    const [isPercent, setIsPercent] = useState(false);
    const [category, setCategory] = useState("");
    const [active, setActive] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, user, value, isPercent, category, active });
        setName("");
        setUser("");
        setValue(0);
        setIsPercent(false);
        setCategory("");
        setActive(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Promotion</h3>
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
            </label> <button type="submit">Add Promotion</button>
        </form>)
}
export default PromotionForm; 
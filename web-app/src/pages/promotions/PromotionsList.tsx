import React, { useState, useEffect } from "react";
import PromotionItem from "./PromotionsItem";
import PromotionForm from "./PromotionsForm";
import axios from "axios";
import { Promotion } from "./promotion.type";

const API_URL = "https://example.com/api/promotions";
interface PromotionListProps {
    promotions: Promotion[];
    onUpdate: (promotion: Promotion) => void;
    onDelete: (id: number) => void;
}

const PromotionList = ({ onUpdate, onDelete }: PromotionListProps) => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPromotions();
    }, []);

    const fetchPromotions = async () => {
        try {
            const response = await axios.get<Promotion[]>(API_URL);
            setPromotions(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const addPromotion = async (promotion: Promotion) => {
        try {
            const response = await axios.post<Promotion>(API_URL, promotion);
            setPromotions([...promotions, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    const updatePromotion = async (id: number, promotion: Promotion) => {
        try {
            await axios.put(`${API_URL}/${id}`, promotion);
            const newPromotions = promotions.map((p) =>
                p.id === id ? { ...p, ...promotion } : p
            );
            setPromotions(newPromotions);
        } catch (error) {
            console.error(error);
        }
    };

    const deletePromotion = async (id: number) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            const newPromotions = promotions.filter((p) => p.id !== id);
            setPromotions(newPromotions);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Promotions</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <ul>
                        {promotions.map((promotion) => (
                            <PromotionItem
                                key={promotion.id}
                                promotion={promotion}
                                onUpdate={(p) => updatePromotion(promotion.id!, p)}
                                onDelete={() => deletePromotion(promotion.id!)}
                            />
                        ))}
                    </ul>
                    <PromotionForm onSubmit={addPromotion} />
                </>
            )}
        </div>
    );
};

export default PromotionList;
import React, { useState } from "react";
import { Promotion } from "./promotion.type";
import PromotionForm from "./PromotionsForm";
import PromotionList from "./PromotionsList";

const Promotions = () => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);

    const handleAddPromotion = (promotion: Promotion) => {
        setPromotions([...promotions, promotion]);
    };

    const handleUpdatePromotion = (updatedPromotion: Promotion) => {
        const updatedPromotions = promotions.map((promotion) => {
            if (promotion.id === updatedPromotion.id) {
                return updatedPromotion;
            }
            return promotion;
        });
        setPromotions(updatedPromotions);
    };

    const handleDeletePromotion = (id: number) => {
        const filteredPromotions = promotions.filter(
            (promotion) => promotion.id !== id
        );
        setPromotions(filteredPromotions);
    };

    return (
        <div>
            <h1>Promotions</h1>
            <PromotionForm onSubmit={handleAddPromotion} />
            <PromotionList
                promotions={promotions}
                onUpdate={handleUpdatePromotion}
                onDelete={handleDeletePromotion}
            />
        </div>
    );
};

export default Promotions;
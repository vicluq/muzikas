import { Router, Request, Response } from 'express';
import CategoryService from '../models/Category.js';

const router = Router();

router.get('/getCategories', (req: Request, res: Response) => {
    try {
        const categories = CategoryService.getCategories();
        return res.status(200).send(categories);
    }
    catch (err) {
        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.get('/getCategory/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const category = CategoryService.getCategory(Number(id));
        return res.status(200).send(category);
    }
    catch (err) {
        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.post('/create', (req: Request, res: Response) => {
    const { name, description } = req.body;

    if(!name || !description) {
        return res.status(402).send({
            message: "Not valid name or description.",
            errorType: 'validation',
        });
    }

    try {
        CategoryService.insertCategory({ name, description });
        return res.status(200).send({
            message: "Insert category" + name + "with success."
        });
    }
    catch (err) {
        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.put('/update/:id', (req: Request, res: Response) => {
    const { id } = req.params; 
    const { name, description } = req.body;

    if(!name || !description) {
        return res.status(402).send({
            message: "Not valid name or description.",
            errorType: 'validation',
        });
    }

    try {
        CategoryService.updateCategory(Number(id), { name, description });
        return res.status(200).send({
            message: "Updated category " + name +  " with success."
        });
    }
    catch (err) {
        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.delete('/delete/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        CategoryService.deleteCategory(Number(id));
        return res.status(200).send({
            message: "Deleted category with success."
        });
    }
    catch (err) {
        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

export default router;
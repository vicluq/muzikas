import { Router, Request, Response } from 'express';
import CategoryService from '../models/Category.js';
import { authMiddleware } from '../middlewares.js';

const router = Router();

router.get('/getCategories', async (req: Request, res: Response) => {
    try {
        const categories = await CategoryService.getCategories();
        console.log(categories);
        return res.status(200).send(categories);
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.get('/getCategory/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const category = await CategoryService.getCategory(Number(id));
        return res.status(200).send(category);
    }
    catch (err) {
        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.post('/create', authMiddleware, async (req: Request, res: Response) => {
    const { name, description } = req.body;

    if(!name || !description) {
        return res.status(402).send({
            message: "Not valid name or description.",
            errorType: 'validation',
        });
    }

    try {
        const duplicateCategory = await CategoryService.getCategoryByName(name);

        if(duplicateCategory.length) {
            return res.status(402).send({
                message: "Duplicate categories are not allowed",
                errorType: 'validation',
            });
        }

        await CategoryService.insertCategory({ name, description });
        return res.status(200).send({
            message: "Inserted category " + name + "with success."
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.put('/update/:id', authMiddleware, async (req: Request, res: Response) => {
    const { id } = req.params; 
    const { name, description } = req.body;

    if(!name || !description) {
        return res.status(402).send({
            message: "Not valid name or description.",
            errorType: 'validation',
        });
    }

    try {
        const category = await CategoryService.getCategoryByName(name);

        if(category.length  && category[0].id !== Number(id)) {
            return res.status(402).send({
                message: "Duplicate categories are not allowed",
                errorType: 'validation',
            });
        }

        await CategoryService.updateCategory(Number(id), { name, description });
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

router.delete('/delete/:id', authMiddleware, async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await CategoryService.deleteCategory(Number(id));
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
import { Router } from 'express';
import bcrypt from 'bcrypt';
const router = Router();
router.post('user/login', (req, res) => {
    const { email, password } = req.body;
    // Get password from BD -> decrypt and compare
    // if equal -> Generate token, validity and return 200
    // if not equal -> return 403 code
});
router.post('user/register', (req, res) => {
    const { email, name, password, confirmPassword } = req.body;
    let error = null;
    // * Encrypt Password
    if (password !== confirmPassword) {
        return res.status(402).json({
            message: "Passwords don't match."
        });
    }
    bcrypt.hash(password, 12).then(enc => {
        // TODO Save user to DB
    }).catch((err) => {
        error = {
            status: 500,
            message: "Internal problems."
        };
    });
    if (error) {
        return res.status(error.status).json({ message: error.message });
    }
    // * Generate token + validity
    const userData = {
        email,
        name,
        tokenCreation: new Date(),
    };
    //const token = jwt.sign(userData)
});
// ! Supplier
router.post('supplier/login', (req, res) => {
    const { email, password } = req.body;
    // Get password from BD -> decrypt and compare
    // if equal -> Generate token, validity and return 200
    // if not equal -> return 403 code
});
router.post('supplier/register', (req, res) => {
    const { email, name, password, confirmPassword } = req.body;
    // Get password from BD -> decrypt and compare
    // if equal -> Generate token, validity and return 200
    // if not equal -> return 403 code
});
export default router;

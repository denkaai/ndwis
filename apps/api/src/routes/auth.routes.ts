import { Router } from 'express';
import { AuthService } from '../services/auth.service.js';

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthService.register(email, password);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await AuthService.login(email, password);
        res.json(result);
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
});

export default router;

import { Router } from 'express';
import { AdminService } from '../services/admin.service.js';
import { authenticate, authorize } from '../middleware/auth.middleware.js';
const router = Router();
// In a real app, 'authorize' would check for a 'SUPER_ADMIN' role
router.get('/payments', authenticate, authorize(['system.view']), async (req, res) => {
    try {
        const payments = await AdminService.getRecentPayments();
        res.json(payments);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/stats', authenticate, authorize(['system.view']), async (req, res) => {
    try {
        const stats = await AdminService.getSystemStats();
        res.json(stats);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=admin.routes.js.map
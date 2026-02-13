import { Router } from 'express';
import { OrganizationService } from '../services/organization.service.js';
import { authenticate } from '../middleware/auth.middleware.js';
const router = Router();
router.post('/', authenticate, async (req, res) => {
    try {
        const { name } = req.body;
        const organization = await OrganizationService.createOrganization(name, req.user.userId);
        res.status(201).json(organization);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.get('/', authenticate, async (req, res) => {
    try {
        const organizations = await OrganizationService.getOrganizationsByUser(req.user.userId);
        res.json(organizations);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
export default router;
//# sourceMappingURL=organization.routes.js.map
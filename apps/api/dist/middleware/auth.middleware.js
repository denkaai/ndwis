import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';
export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'No token provided' });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
export const authorize = (permissions) => {
    return async (req, res, next) => {
        // RBAC logic will be expanded here after DB roles/permissions are populated
        // For MVP, we'll check if the user exists in the request
        if (!req.user)
            return res.status(403).json({ message: 'Forbidden' });
        next();
    };
};
//# sourceMappingURL=auth.middleware.js.map
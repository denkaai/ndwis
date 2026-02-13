import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'super-refresh-secret-key';
export class AuthService {
    static async hashPassword(password) {
        return bcrypt.hash(password, 10);
    }
    static async comparePassword(password, hash) {
        return bcrypt.compare(password, hash);
    }
    static generateTokens(userId) {
        const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ userId }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
        return { accessToken, refreshToken };
    }
    static async register(email, password) {
        const passwordHash = await this.hashPassword(password);
        return prisma.user.create({
            data: {
                email,
                passwordHash,
            },
        });
    }
    static async login(email, password) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user)
            throw new Error('User not found');
        const isValid = await this.comparePassword(password, user.passwordHash);
        if (!isValid)
            throw new Error('Invalid password');
        return {
            user,
            ...this.generateTokens(user.id),
        };
    }
}
//# sourceMappingURL=auth.service.js.map
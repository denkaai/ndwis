export declare class AuthService {
    static hashPassword(password: string): Promise<string>;
    static comparePassword(password: string, hash: string): Promise<boolean>;
    static generateTokens(userId: string): {
        accessToken: string;
        refreshToken: string;
    };
    static register(email: string, password: string): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            passwordHash: string;
            isVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map
export declare class AuthService {
    static hashPassword(password: string): Promise<string>;
    static comparePassword(password: string, hash: string): Promise<boolean>;
    static generateTokens(userId: string): {
        accessToken: string;
        refreshToken: string;
    };
    static register(email: string, password: string): Promise<any>;
    static login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: any;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map
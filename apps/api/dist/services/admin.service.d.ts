export declare class AdminService {
    static getRecentPayments(limit?: number): Promise<({
        organization: {
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        organizationId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        provider: string;
        status: string;
    })[]>;
    static getSystemStats(): Promise<{
        userCount: number;
        orgCount: number;
        revenueTotal: number | import("@prisma/client/runtime/library").Decimal;
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map
export declare class AdminService {
    static getRecentPayments(limit?: number): Promise<{
        id: string;
        createdAt: Date;
        organizationId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        provider: string;
        status: string;
    }[]>;
    static getSystemStats(): Promise<{
        userCount: number;
        ministryCount: number;
        revenueTotal: number | import("@prisma/client/runtime/library").Decimal;
        countyCoverage: number;
        countyStats: (import(".prisma/client").Prisma.PickEnumerable<import(".prisma/client").Prisma.OrganizationGroupByOutputType, import(".prisma/client").Prisma.OrganizationScalarFieldEnum | import(".prisma/client").Prisma.OrganizationScalarFieldEnum[]> & {
            _count: true | {
                id?: number;
                name?: number;
                ownerId?: number;
                createdAt?: number;
                updatedAt?: number;
                _all?: number;
            } | undefined;
            _min: {
                id?: string | null;
                name?: string | null;
                ownerId?: string | null;
                createdAt?: Date | null;
                updatedAt?: Date | null;
            } | undefined;
            _max: {
                id?: string | null;
                name?: string | null;
                ownerId?: string | null;
                createdAt?: Date | null;
                updatedAt?: Date | null;
            } | undefined;
        })[];
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map
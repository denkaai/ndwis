export declare class OrganizationService {
    static createOrganization(name: string, ownerId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        ownerId: string;
    }>;
    static getOrganizationsByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        ownerId: string;
    }[]>;
}
//# sourceMappingURL=organization.service.d.ts.map
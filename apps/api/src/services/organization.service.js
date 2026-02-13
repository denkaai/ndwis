import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class OrganizationService {
    static async createOrganization(name, ownerId) {
        return prisma.organization.create({
            data: {
                name,
                ownerId,
                memberships: {
                    create: {
                        userId: ownerId,
                        roleId: 'admin-role-id', // Placeholder for actual role ID logic
                    },
                },
            },
        });
    }
    static async getOrganizationsByUser(userId) {
        return prisma.organization.findMany({
            where: {
                memberships: {
                    some: {
                        userId,
                    },
                },
            },
        });
    }
}
//# sourceMappingURL=organization.service.js.map
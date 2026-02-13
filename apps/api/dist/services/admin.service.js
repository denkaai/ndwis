import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class AdminService {
    static async getRecentPayments(limit = 10) {
        return prisma.payment.findMany({
            take: limit,
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                organization: {
                    select: {
                        name: true,
                    },
                },
            },
        });
    }
    static async getSystemStats() {
        const [userCount, orgCount, paymentTotal] = await Promise.all([
            prisma.user.count(),
            prisma.organization.count(),
            prisma.payment.aggregate({
                _sum: {
                    amount: true,
                },
                where: {
                    status: 'COMPLETED',
                },
            }),
        ]);
        return {
            userCount,
            orgCount,
            revenueTotal: paymentTotal._sum.amount || 0,
        };
    }
}
//# sourceMappingURL=admin.service.js.map
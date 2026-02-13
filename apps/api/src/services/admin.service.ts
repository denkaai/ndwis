import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AdminService {
    static async getRecentPayments(limit: number = 10) {
        return prisma.payment.findMany({
            take: limit,
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                organization: {
                    select: {
                        name: true,
                        type: true,
                        location: true,
                    },
                },
            },
        });
    }

    static async getSystemStats() {
        const [userCount, ministryCount, paymentTotal, countyBreakdown] = await Promise.all([
            prisma.user.count(),
            prisma.organization.count({ where: { type: 'MINISTRY' } }),
            prisma.payment.aggregate({
                _sum: {
                    amount: true,
                },
                where: {
                    status: 'COMPLETED',
                },
            }),
            prisma.organization.groupBy({
                by: ['location'],
                _count: {
                    id: true,
                },
                where: {
                    location: { not: null }
                }
            })
        ]);

        return {
            userCount,
            ministryCount,
            revenueTotal: paymentTotal._sum.amount || 0,
            countyCoverage: countyBreakdown.length,
            countyStats: countyBreakdown
        };
    }
}

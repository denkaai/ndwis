export declare class PaymentService {
    static initiateMPesaPayment(organizationId: string, amount: number, phoneNumber: string): Promise<{
        id: string;
        createdAt: Date;
        organizationId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        provider: string;
        status: string;
    }>;
    static completePayment(paymentId: string): Promise<{
        id: string;
        createdAt: Date;
        organizationId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        provider: string;
        status: string;
    }>;
}
//# sourceMappingURL=payment.service.d.ts.map
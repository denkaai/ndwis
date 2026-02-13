import { PrismaClient } from '@prisma/client';
import { MpesaService } from './mpesa.service.js';
const prisma = new PrismaClient();
export class PaymentService {
    static async initiateMPesaPayment(organizationId, amount, phoneNumber) {
        console.log(`Initiating M-Pesa payment for organization ${organizationId} of amount ${amount}`);
        // Call real M-Pesa Service
        const mpesaResponse = await MpesaService.initiateSTKPush(phoneNumber, amount, organizationId);
        return prisma.payment.create({
            data: {
                organizationId,
                amount,
                provider: 'MPESA',
                status: 'PENDING',
                // In a real app, store mpesaResponse.CheckoutRequestID for matching callbacks
            },
        });
    }
    static async completePayment(paymentId) {
        return prisma.payment.update({
            where: { id: paymentId },
            data: { status: 'COMPLETED' },
        });
    }
}
//# sourceMappingURL=payment.service.js.map
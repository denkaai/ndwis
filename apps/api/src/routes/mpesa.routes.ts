import { Router } from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const router = Router();

router.post('/callback', async (req, res) => {
    const { Body } = req.body;

    if (!Body || !Body.stkCallback) {
        return res.status(400).send('Invalid callback data');
    }

    const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDesc } = Body.stkCallback;

    console.log(`M-Pesa Callback received for CheckoutRequestID: ${CheckoutRequestID}`);

    if (ResultCode === 0) {
        // Payment successful
        // In a real app, you'd match the CheckoutRequestID to a payment record in your DB
        console.log('Payment Successful:', ResultDesc);
        // await prisma.payment.updateMany({ ... });
    } else {
        // Payment failed
        console.log('Payment Failed:', ResultDesc);
    }

    res.json({ ResultCode: 0, ResultDesc: 'Accepted' });
});

export default router;

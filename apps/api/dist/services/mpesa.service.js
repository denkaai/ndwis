import axios from 'axios';
import { Buffer } from 'buffer';
export class MpesaService {
    static CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY || 'YOUR_SANDBOX_KEY';
    static CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET || 'YOUR_SANDBOX_SECRET';
    static SHORTCODE = process.env.MPESA_SHORTCODE || '174379'; // Sandbox Paybill
    static PASSKEY = process.env.MPESA_PASSKEY || 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
    static CALLBACK_URL = process.env.MPESA_CALLBACK_URL || 'https://yourdomain.com/api/mpesa/callback';
    static async getAccessToken() {
        const auth = Buffer.from(`${this.CONSUMER_KEY}:${this.CONSUMER_SECRET}`).toString('base64');
        const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            headers: { Authorization: `Basic ${auth}` },
        });
        return response.data.access_token;
    }
    static async initiateSTKPush(phoneNumber, amount, accountReference) {
        const accessToken = await this.getAccessToken();
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
        const password = Buffer.from(`${this.SHORTCODE}${this.PASSKEY}${timestamp}`).toString('base64');
        const payload = {
            BusinessShortCode: this.SHORTCODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: phoneNumber,
            PartyB: this.SHORTCODE,
            PhoneNumber: phoneNumber,
            CallBackURL: this.CALLBACK_URL,
            AccountReference: accountReference,
            TransactionDesc: 'Payment for STRATA Services',
        };
        console.log(`Sending STK Push to ${phoneNumber} for amount ${amount}...`);
        try {
            const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/query', // Note: Sandbox endpoint name might vary slightly in docs
            payload, { headers: { Authorization: `Bearer ${accessToken}` } });
            console.log('M-Pesa STK Push Response:', response.data);
            return response.data;
        }
        catch (error) {
            console.error('M-Pesa STK Push Error:', error.response?.data || error.message);
            throw error;
        }
    }
}
//# sourceMappingURL=mpesa.service.js.map
import express from 'express';
import authRoutes from './routes/auth.routes.js';
import orgRoutes from './routes/organization.routes.js';
import mpesaRoutes from './routes/mpesa.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/orgs', orgRoutes);
app.use('/api/mpesa', mpesaRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

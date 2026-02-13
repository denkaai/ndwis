import express from 'express';
import authRoutes from './routes/auth.routes';
import orgRoutes from './routes/organization.routes';
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/orgs', orgRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map
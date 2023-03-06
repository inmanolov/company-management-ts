import express, { Application} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import employeesRoutes from './routes/employees';
import teamsRoutes from './routes/teams';
import companiesRoutes from './routes/companies';

dotenv.config();
const app: Application = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5011;

app.use('/employees', employeesRoutes);
app.use('/teams', teamsRoutes);
app.use('/companies', companiesRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})

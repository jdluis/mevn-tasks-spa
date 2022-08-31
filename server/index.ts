import app from "./app";
import { startConnection } from "./database";
import dotenv from 'dotenv'

dotenv.config();

startConnection();
app.listen(process.env.PORT, () => {
    console.log(`'Server is running on port ${process.env.PORT}'`);
});

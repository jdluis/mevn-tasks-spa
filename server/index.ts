import app from "./app";
import { startConnection } from "./database";

startConnection();
app.listen(3000);
console.log('Server is running on port 3000');

/*
|--------------------------------------------------------------------------
| BackEnd Info Branch
|--------------------------------------------------------------------------
|
| In this Branch i save a backup of the backEnd
| for check if i want to create a new proyect or
| if a have some problems in the future.
|
*/
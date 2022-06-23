import { connect } from 'mongoose'

export const startConnection = async () => {
    try {
        const db = await connect('mongodb+srv://jdluisDev777:GhC2rofLdhbbLG5F@cluster0.qf4ckcj.mongodb.net/?retryWrites=true&w=majority')
        console.log("Data Base Name:" + " " + db.connection.name)
    } catch (error) {
        console.error("error");
    }
}

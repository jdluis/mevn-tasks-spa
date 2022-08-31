import { connect } from 'mongoose'

export const startConnection = async () => {
    try {
        const db = await connect('')
        console.log("Data Base Name:" + " " + db.connection.name)
    } catch (error) {
        console.error("error");
    }
}

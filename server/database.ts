import { connect } from 'mongoose'
require('dotenv').config()
export const startConnection = async () => {
    try {
        const db = await connect(process.env.MY_ATLAS_KEY as string)
        console.log("Data Base Name:" + " " + db.connection.name)
    } catch (error) {
        console.error("error");
    }
}

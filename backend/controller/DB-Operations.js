import mongoose from 'mongoose';


const connectToDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to DB....");
    })
    .catch((error) => {
        console.log(error);
    })
}

const disconnectDB = async () => {
    await mongoose.disconnect()
    .then(() => {
        console.log("Disconnected Mongo DB...")
    })
    .catch((error) => {
        console.log(error)
    })
}

export {connectToDB,disconnectDB};
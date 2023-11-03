import mongoose from "mongoose";

try {
 await mongoose.connect(process.env.URI_MONGO)
    console.log('connected to DB')
} catch(error)
{
    console.log(error)
}
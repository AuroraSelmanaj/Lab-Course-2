import mongoose from "mongoose";

export const mongoConnect = async () => {
    return await mongoose.connect(
        "mongodb://127.0.0.1:27017/courses"
    ).catch(err => err)
        .then((x) => {
            console.log("mongo connected");
            return x
        });
}

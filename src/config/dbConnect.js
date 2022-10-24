import mongoose from "mongoose"

mongoose.connect("mongodb+srv://casamento:katanaGoiaba@cluster0.vuxg3mr.mongodb.net/db-casamento");

let db = mongoose.connection;

export default db;
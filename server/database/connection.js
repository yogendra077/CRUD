const mongoose=require('mongoose');
const DB=process.env.DATABASE_URL;
const connectDB=async ()=>{
    try{
        const con=await mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    })
console.log(`database connected at:${con.connection.host}`);
}catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;

// utuberrrr


// const mongoose = require('mongoose');
// //const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
// const connectDB = async () => {
//     try{
//         // mongodb connection string
//         const con = await mongoose.connect(process.env.DATABASE_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         })

//         console.log(`MongoDB connected : ${con.connection.host}`);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }

// module.exports = connectDB
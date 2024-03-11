import { app } from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({
    key_id : process.env.Razorpay_API_Key,
    key_secret: process.env.Razorpay_API_Secret,
});

app.listen(process.env.PORT , () => {
console.log(`Server Is Running On http://localhost:${process.env.PORT}`);
});
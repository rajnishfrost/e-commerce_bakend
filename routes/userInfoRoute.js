import express  from "express";
const router = express.Router();
import {userInfo , logIn} from "../controllers/userInfoController.js"

router.route("/userInfo").post(userInfo);
router.route("/logIn").post(logIn);
router.route("/test").get((req,res) => {res.send("getting the data")});

export default router ;
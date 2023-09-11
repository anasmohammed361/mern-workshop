import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRouter.js";
import mongoose from "mongoose";
import passport from "passport";
import { UserModel } from "./models/User.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Db connected");
  })
  .catch((e) => {
    console.log(e);
  });

//Serialization
passport.serializeUser((user, done) => {
  done(null, user?.id);
});
passport.deserializeUser((id, done) => {
  UserModel.findById(id)
    .then((data) => done(null, data))
    .catch((e) => done(e, null));
});

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Auth");
  } else {
    res.send("Not auth");
  }
});
app.get("/out",(req,res)=>{
    req.logOut((err)=>{
        console.log(err);
    })
    res.redirect("/")
})
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
import express from "express";

const router = express.Router();
const app = express()

app.use((req, res, next) => {
  console.log("First Middleaware")
  next()
});

app.use((req, res, next) => {
  res.send("Hello World. i am custom middleware");
});
app.use(router);

router.get("/a", (req, res, next) => {
  res.send("Hello this is route a")
})


app.listen({port: 8000}, () => {
  console.log("express node server has loaded");
})
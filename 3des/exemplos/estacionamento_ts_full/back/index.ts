import express from "express";
import bodyParser from "body-parser";
import router from "./src/views/routes";
import "./db";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
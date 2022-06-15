import express from "express";
import { siteModal } from "./models.js";
import { siteView } from "./views.js";

const app = express();
const port = 3010;

app.get("/", (req, res) => {
  res.send(siteView(siteModal));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

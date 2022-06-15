import axios from "axios";
import express from "express";

const app = express();
const port = 3009;

const nouns = (
  await axios.get("https://edwardtanguay.netlify.app/share/germanNouns.json")
).data;

app.get("/", (req, res) => {
  res.send(
    `
        <h1>There are ${nouns.length} nouns</h1>
        <ul>${nouns
          .map((m) => `<li>${m.article} ${m.singular}</li>`)
          .join("")}</ul>`
           /*  mapten bir array gelir ve array de otomatik olarak virgül konulur. 
           Bunu kaldirmak icin join() metodunu kullaniriz. */
  );
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

import axios from "axios";
import express from "express";

const app = express();
const port = 3009;

const nouns = (
  await axios.get("https://edwardtanguay.netlify.app/share/germanNouns.json")
).data;
 

app.get('/', (req, res) => {
    res.send(
        `<ul>${nouns
            .map((m) => `<li>${m.article} ${m.singular}</li>`)
            .join('')}</ul>`
    );
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

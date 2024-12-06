const express = require("express");
const app = express();
const app2 = express();

const port = 3000;
const port2 = 5000;

// First Server
app.get("/", (req, res) => {
  res.send("Lockes");
});

app.listen(port, () => {
  console.log(`Example app listening 
at http://localhost:${port}`);
});

// Second Server

app2.get("/", (req, res) => {
  res.send("Server 2: Lockes");
});

app2.listen(port2, () => {
  console.log(`Server 2 listening at http://localhost:${port2}`);
});

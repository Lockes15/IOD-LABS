const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is port 1");
});

app.listen(port, () => {
  console.log(`This is part 1 ${port}`);
});

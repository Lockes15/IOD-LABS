const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("This is port 2");
});

app.listen(port, () => {
  console.log(`This is part 2 ${port}`);
});

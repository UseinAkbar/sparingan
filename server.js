const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  const user = [
    {
      name: "Rafli"
    },
    {
      name: "Usein"
    }
  ]
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
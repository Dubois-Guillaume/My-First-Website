import express from "express";

const app = express();

app.use(express.static("src"));

app.get("/", (request, response) => {
  response.sendFile("http://localhost:3000/html/acceuil.html");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000/html/acceuil.html");
});

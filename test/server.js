const express = require("express"),
  dotenv = require("dotenv"),
  testRouter = require("./routes/test");

dotenv.config();

const app = express(),
  port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(testRouter);

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  server.close();
  console.log("\nServer closed; database disconnected");
  process.exit(0);
});

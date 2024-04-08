import express, { Express } from "express";
import dotenv from "dotenv";
import { Server } from "http";
import { walletRouter } from "./routes/wallet";

dotenv.config();

const app: Express = express(),
  port: number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(walletRouter);

const server: Server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
    server.close();
    console.log("\nServer closed; database disconnected");
    process.exit(0);
});

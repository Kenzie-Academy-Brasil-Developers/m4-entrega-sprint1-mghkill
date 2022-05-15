import express from "express";
import userRouter from "./routes/users.routes";

const port = 3000;

const app = express();

app.use(express.json());

app.use("", userRouter);

app.listen(port, () => {
  console.log(`App está rodando na porta ${port}`);
});

import http from "http";
import "dotenv/config";
import { app } from "./app.js";

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

const http = require("http");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = require("./app");

const server = http.createServer(app);

const mongoURL =
  "mongodb+srv://user:beehive@users-beehive.epbhe.mongodb.net/users-beehive?retryWrites=true&w=majority";

async function startServer() {
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTapology: true,
  });

  server.listen(PORT, () => {
    console.log(`server is listening on Port::::${PORT}`);
  });
}

startServer();

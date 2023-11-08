const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "invoice-app" });
    console.log("\x1b[36m%s\x1b[0m", "connected to database");
    const app = require("./index");

    app.listen(PORT, () => {
        console.log(
            "\x1b[36m%s\x1b[0m",
            `Listening to port: ${PORT}`
        );
    });
}

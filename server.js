import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Create an Express application instance
app.use(express.static("uploads"))
routes(app)

app.listen(3000, () => { // Start the server and listen for requests on port 3000
    console.log("Servidor escutando...");
});

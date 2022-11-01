import express from "express"
import * as data from "./sample-data.js"

const app = express();

app.get("/restaurants", async (req, res) => {
    const limit = +req.query.limit || 5;
    const offset = +req.query.offset || 0;
    res.json({
        rows: data.restaurants.slice(offset, offset + limit),
        count: data.restaurants.length,
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

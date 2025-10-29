import exporess from 'express'
const app = exporess();

const PORT  = 8080;

const requestHandler = (req: any, res: any ) => {
    const requestData = { body: req.body, params: req.params, query: req.query};
    console.log(requestData)

    res.send(requestData)
}

app.get("/device/logState", requestHandler)

app.post("/device/logState", requestHandler)

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());

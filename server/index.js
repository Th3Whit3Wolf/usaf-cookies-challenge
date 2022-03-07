const createServer = require("./server");
const port = 3003;
const app = createServer();

app.listen(port, () => {
    console.log(`server listening on localhost:${port}`)
})
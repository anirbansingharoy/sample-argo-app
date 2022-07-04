var express = require("express");
var app = express();

const port = parseInt(process.env.PORT) || 8080;
const pod_name = process.env.HOSTNAME;
app.get('/helloworld', (req, res) => {
  res.send('Hello World from pod: '+pod_name);
});

app.get('/hellomars', (req, res) => {
  res.send('Hello Mars from pod: '+pod_name);
});

app.listen(port, () => {
  console.log(`App: listening on port ${port}`);
});

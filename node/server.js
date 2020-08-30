const express = require('express');
const { stern } = require('../pkg/scatter_plotter.js');


const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/update', function (req, res) {
  let inputNum = parseInt(req.body.inputNum);
  let resNum = execute(inputNum);
  res.json({ resNum: resNum });
})

function execute(inputNum) {
  return stern(inputNum);
}


app.listen(port, () => console.log(`Listening at http://localhost:${port}`))


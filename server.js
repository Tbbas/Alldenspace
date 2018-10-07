var express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Project = require('./api/models/projectsModel'),
  bodyParser = require('body-parser');
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://allden:kittycat12@ds113482.mlab.com:13482/projects')
app.use( express.static( `${__dirname}/./build` ) );
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
var routes = require('./api/routes/projectsRoutes');



routes(app);

const path = require('path')

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, './build/index.html'));
})


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found :c'})
});

app.listen(port);
console.log("Listening to port: " + port);

var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
var io = require('socket.io')();


/*
Sidekick agent
*/
var sidekickDebugger = require('@runsidekick/sidekick-agent-nodejs');

sidekickDebugger.start({
  apiKey:"da259aec-f624-4d59-b2b1-5fe314ec36d6", 
  SIDEKICK_AGENT_APPLICATION_NAME: "sidekick-demo-app",
  brokerHost: "wss://broker.service.runsidekick.me",
  applicationVersion:"1.0",
  applicationStage :"lab",
  errorCollectionEnable: true,
  errorCollectionEnableCaptureFrame: true
});


app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

var server = app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});

io.attach(server);
io.on('connection', function (socket) {
  socket.on('postMessage', function (data) {
    io.emit('updateMessages', data);
  });
});

reload(server, app);

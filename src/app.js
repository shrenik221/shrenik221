const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const htmlRoutes = require('./backend/routes/htmlRoutes');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(compression());

app.use(logger('dev'));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '/client')));

// app.use(express.static(path.resolve(__dirname, '/client/assets/images')));

app.set('views', __dirname + '/client/views');



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(htmlRoutes);

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
  console.log('Application running in port: ' + app.get('port'));
});

module.exports = app;

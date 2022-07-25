const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');



app.use('/', indexRouter);
require('dotenv').config()



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));


let port = process.env.PORT;

app.use('/file-auth', require('./components/fileUpload&LocalAuthMS/fileUploadSessionLocalAuth/app'))

app.use('/req-header', require('./components/reqHeaderMS/index'))

app.use('/short-url', require('./components/urlShortenerMS/index'))
  
app.use('/time-stamp', require('./components/timeStampMS/index'))


app.listen(port, function () {
    console.log('Your app is listening on port ' + port);
  });

  
module.exports = app;

var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile('C:/Users/abror/OneDrive/Desktop/fccback/Fcc-Microservice-Apps/view/index.html');
});
/*
router.get('/file-auth', (req, res) => {

  res.sendFile('C:/Users/abror/OneDrive/Desktop/fccback/Fcc-Microservice-Apps/components/fileUpload&LocalAuthMS/fileUploadSessionLocalAuth/app.js', function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent app.js')
    }
})

})
*/



module.exports = router;


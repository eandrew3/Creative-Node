var express = require('express');
var router = express.Router();
var hw = [
  {
    name: 'Midterm 2',
    section: 'C S 260',
    date: 'November 8'
  },
  {
    name: 'HW 11',
    section: 'CHEM 481',
    date: 'November 21'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/classes', function(req, res, next) {
  console.log("we in classes");
  res.send(hw);
});

router.post('/classes', function(req, res, next) {
  console.log("classes post tho!");
  console.log(req.body);
  hw.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;

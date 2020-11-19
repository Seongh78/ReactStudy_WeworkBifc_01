var express = require('express');
var router = express.Router();
const todos = [
  {
    id: 1,
    title: '두부 사기',
  },
  {
    id: 2,
    title: '방청소',
  },
  {
    id: 3,
    title: '공부',
  },
  {
    id: 4,
    title: '자전거타기',
  },
];

/* GET home page. */
router.get('/todos', function (req, res, next) {
  res.status(200).json(todos);
});

module.exports = router;

const router = require('express').Router();

/* GET cards listing. */
router.get('/', (req, res) => {
  res.render('card'); // карточка товара
});

module.exports = router;
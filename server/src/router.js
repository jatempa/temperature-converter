const { Router } = require('express');

const router = Router();

router.get('/custom', (req, res) => {
  res.status(200);
  res.send({ message: 'hello from custom route' });
});

module.exports = router;

const { Router } = require('express');

const router = Router();

const errorMessage = 'Invalid value, try again !';

const response = {
  result: '',
  error: '',
};

router.get('/celsius-to-fahrenheit', (req, res) => {
  const { temperature } = req.body;

  try {
    if (!temperature || typeof temperature !== 'number') {
      throw new Error(errorMessage);
    }

    const result = (temperature * 9) / 5 + 32;
    res.status(200).send({ ...response, result });
  } catch (e) {
    console.log(e);
    res.status(404).send({ ...response, error: `${e.name}: ${e.message}` });
  }
});

router.get('/fahrenheit-to-celsius', (req, res) => {
  const { temperature } = req.body;

  try {
    if (!temperature || typeof temperature !== 'number') {
      throw new Error(errorMessage);
    }

    const result = ((temperature - 32) * 5) / 9;
    res.status(200).send({ ...response, result });
  } catch (e) {
    res.status(404).send({ ...response, error: `${e.name}: ${e.message}` });
  }
});

module.exports = router;

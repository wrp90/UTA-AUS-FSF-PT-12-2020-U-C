const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const sequelizData = await User.findAll ({
    });
    res.render(sequelizData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

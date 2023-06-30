const { getAllFoodWithCategory } = require("../controllers/food.controller");
const { getAllSidesInternal } = require("../controllers/sides.controller.js");

const { getAllCurrysInternal } = require("../controllers/curry.controllers.js");

const getInitialData = async (req, res) => {
  try {
    const curryRiceBowl = await getAllFoodWithCategory("curry rice bowl");
    const sides = await getAllSidesInternal("sales");
    const curries = await getAllCurrysInternal();
    res.status(200).json({ curryRiceBowl, sides, curries });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getInitialData };

const Categories = require("./model");

const create = async (req, res, next) => {
  try {
    const {name} = req.body;
    const result = await Categories.create({name});
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {create};

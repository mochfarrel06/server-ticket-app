const Categories = require("./model");
const mongoose = require("mongoose");

// Function getAll categories
const index = async (req, res, next) => {
  try {
    const result = await Categories.find();
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Function create
const create = async (req, res, next) => {
  try {
    const {name} = req.body;
    const result = await Categories.create({name});
    res.status(201).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Function find one
const find = async (req, res, next) => {
  try {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({message: "ObjectId tidak valid"});
    }

    const result = await Categories.findOne({_id: id});

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {index, create, find};

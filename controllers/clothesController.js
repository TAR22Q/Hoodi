const catchAsync = require("../utils/catchAsync");
const Clothes = require("./../models/clothesModel");

exports.getAllClothes = catchAsync(async (req, res, next) => {
  const clothes = await Clothes.find();
  res.status(200).json({
    status: "success",
    data: {
      clothes,
    },
  });
});

exports.createClothe = catchAsync(async (req, res, next) => {
  const newClothe = await Clothes.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      clothe: newClothe,
    },
  });
});

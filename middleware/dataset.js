const favouritesDataset = require("../dataset/dataset");

exports.getDataset = (req, _, next) => {
  req.dataset = favouritesDataset;
  next();
};

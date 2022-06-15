const favouritesDataset = require("../dataset/favouritesDataset");

exports.getDataset = (req, _, next) => {
  req.dataset = favouritesDataset;
  next();
};

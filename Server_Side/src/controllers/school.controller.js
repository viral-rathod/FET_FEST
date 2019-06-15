const SchoolModel = require("../model/school.model");

exports.findAll = async (req, res) => {
  try {
    const _user = await SchoolModel.find();
    res.json({
      status: true,
      message: "successful!",
      data: _user
    });
  } catch (error) {
    res.json({
      status: false,
      message: error,
      data: null
    });
  }
};

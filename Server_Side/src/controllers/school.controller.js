const SchoolModel = require("../model/school.model");

exports.create = async (req, res) => {
  try {
    const param = req.body;
    const school = new SchoolModel(param);
    await school.save();
    res.json({
      status: true,
      message: "Success",
      data: null
    });
  } catch (error) {
    res.json({
      status: false,
      message: error
    });
  }
};

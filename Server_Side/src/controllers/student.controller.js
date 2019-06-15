const StudentModel = require("../model/student.model");

exports.create = async (req, res) => {
  try {
    const param = req.body;
    const student = new StudentModel(param);
    await student.save();
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

exports.findAll = async (req, res) => {
  try {
    const _student = await StudentModel.find();
    res.json({
      status: true,
      message: "successful!",
      data: _student
    });
  } catch (error) {
    res.json({
      status: false,
      message: error,
      data: null
    });
  }
};

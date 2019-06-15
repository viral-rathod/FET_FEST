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

exports.update = async (req, res) => {
  try {
    const params = req.body;
    await StudentModel.findByIdAndUpdate(req.params.id, params);
    res.json({
      status: true,
      message: "Updated successfully!"
    });
  } catch (error) {
    res.json({
      status: false,
      message: error,
      data: null
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await StudentModel.findByIdAndDelete(req.params.id);
    res.json({
      status: true,
      message: req.params.id + " deleted successfully!",
      data: req.params.id
    });
  } catch (error) {
    res.json({
      status: false,
      message: "No record found with provided id, please try again",
      data: null
    });
  }
};

exports.findById = async (req, res) => {
  try {
    const _data = await StudentModel.findById(req.params.id);
    res.json({
      status: true,
      message: "Record fetched successfully!",
      data: _data
    });
  } catch (error) {
    res.json({
      status: false,
      message: "No record found!",
      data: null
    });
  }
};

exports.findByAmenities = async (req, res) => {
  try {
    const _query = {
      $or: [
        { "amenities.books.paid": false },
        { "amenities.stationary.paid": false },
        { "amenities.uniform.paid": false },
        { "amenities.fee.paid": false }
      ]
    };
    const _data = await StudentModel.find(_query);
    res.json({
      status: true,
      message: "Record fetched successfully!",
      data: _data
    });
  } catch (error) {
    res.json({
      status: false,
      message: "No record found!",
      data: null
    });
  }
};

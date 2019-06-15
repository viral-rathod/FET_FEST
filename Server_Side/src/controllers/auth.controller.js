const SchoolModel = require("../model/school.model");

exports.register = async (req, res) => {
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

exports.login = async (req, res) => {
  try {
    const params = req.body;
    const schoolModel = {
      email: params.email,
      password: params.password
    };

    const _user = await SchoolModel.findOne(schoolModel);
    if (!_user) {
      return res.json({
        status: false,
        message: "Invalid email or password"
      });
    }
    res.json({
      status: true,
      message: "Login successful!",
      data: _user
    });
  } catch (error) {}
};

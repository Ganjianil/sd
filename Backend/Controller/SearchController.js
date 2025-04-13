const model = require("../model/searchdata");
const signup = async (req, res) => {
  try {
    const { companyname, city, pincode, number, category } = req.body;
    if (!companyname || !city || !pincode || !number || !category) {
      res.status(401).json({ message: "Enter detail's" });
    }
    const existingentry = await model.findOne({
      companyname,
      city,
      pincode,
      number,
      category,
    });
    if (existingentry) {
      res.status(401).json({ message: "Already details in database" });
    }
    const newentry = new model({
      companyname,
      city,
      pincode,
      number,
      category,
    });
    await newentry.save();
    res.status(201).json({ message: "saved in database" });
  } catch (error) {
    res
      .status(401)
      .json({ message: "ERROR WHILE ENTERING DETAILS DURING SIGNUP" });
  }
};
module.exports = { signup };

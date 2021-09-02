const { Customer } = require("../models");
const csvtojson = require("csvtojson");


exports.get = async  (req,res,next)=>{
   const customer = await Customer.findAll();
   res.send(customer)
}

exports.import = async (req, res, next) => {
   csvtojson()
    .fromFile(req.files[0]['path'])
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        const customer = Customer.create({
          name: source[i]["Name"],
          email: source[i]["Email"],
          active: 1,
        });
     
      }
    });
    res.send('ok');
};

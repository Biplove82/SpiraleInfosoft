const salaryModels = require("../modells/salaryModels");



const createsalary = async function (req, res) {
   let sal_ary = req.body
   let data = await salaryModels.create(sal_ary)

   res.send({ msg: data })
}





const getsalary = async function (req, res) {
   let dada2 = req.body
   let sal = await salaryModels.find()
   res.send({ msg: sal })

}



const update_salary = async function (req, res) {

   let id3 = req.params
   let updatedata = req.body
   try {

      let updateusers = await salaryModels.findByIdAndUpdate(id3, updatedata, { new: true });

      if (!updateusers) {
         res.status(404).json({ msg: "Not Found" })
      }
      res.json({ msg: "update Users" })

   } catch (err) { res.status(500).json(err) }
}

const deletesalary = async function (req, res) {
   try {

      let { userid } = req.params
      let del2 = await salaryModels.findByIdAndDelete(userid);
      if (!del2) {
         res.status(404).json({ msg: "user not found" })

      } res.json({ msg: "user deleted sucessfully" })

   } catch (err) {
      res.status(500).json({ msg: "ERROR" })

   }


}




module.exports.createsalary = createsalary;
module.exports.getsalary = getsalary;
module.exports.update_salary=update_salary;
module.exports.deletesalary = deletesalary;




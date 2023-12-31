const Expense = require('../models/expense');

exports.insertExpense = (req, res, next) => {
    const desc = req.body.description;
    const categ = req.body.category;
    const amount = req.body.amount;
    console.log(desc);
    console.log(categ);
    console.log(amount);
    Expense.create({
      description: desc,
      category: categ,
      amount: amount
    })
    .then(result=>{
      //console.log(result);
      console.log('Created expense');
      res.redirect('/get-expense')
    })
    .catch(err => {
      console.log(err)
    })
  };

exports.deleteExpense = (req,res,next)=>{
    const description=req.params.description;
    console.log(description)
     Expense.destroy({
        where: {
          description: description
        },
      })
    .then((result)=>{
        console.log(result);
        res.redirect('/get-expense')
    })
    .catch(err=>console.log(err));
}

exports.getExpense =(req,res,next)=>{
    Expense.findAll()
    .then((result)=>{
        res.json(result)
    })
    .catch(err=>console.log(err));
};
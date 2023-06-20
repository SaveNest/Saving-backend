import incomes from "../Models/incomeModel.js"

const createIncome = async (req, res) => {
     try {
          const income = new incomes({
               email: req.body.email,
               incomeAmount: req.body.incomeAmount,
               Period: req.body.Period,
               incomeType: req.body.incomeType

          });
          const incomeSaved = await income.save()
          res.status(201).json({
               message: "Income created successfully",
               data: incomeSaved
          })
     } catch (error) {
          res.status(500).json({
               message: error.message || "Some error occurred while creating the income."
          })
     }

}


const readIncome = async (req, res) => {
     try {
          let id = req.params.reqId;
          let query = { _id: id };
          const income = await incomes.find(query)
          res.status(200).json({
               message: "Incomes fetched successfully",
               data: income
          })
     } catch (error) {
          res.status(500).json({
               message: error.message || "Some error occurred while fetching incomes."
          })
     }

}
export {createIncome , readIncome } ;

import React, {useContext} from 'react'
import { GlobalContext } from '../context/globalState'

const AddExpense = () => {

  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


  return (
    <div className='flex flex-row justify-between bg-gray-300 p-2 my-[20px] divide-x divide-slate-200'>
      <div className='flex-1 text-center'>
        <h4 className='text-sm'>INCOME</h4>
        <p className='text-green-500 my-[5px]'>$ {income}</p>
      </div>
      <div className='flex-1 text-center'>
        <h4 className='text-sm'>EXPENSE</h4>
        <p className='text-red-500 tex-[20px] my-[5px]'>$ {expense}</p>
      </div>
    </div>
  )
}

export default AddExpense

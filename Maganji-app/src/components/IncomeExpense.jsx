import React from 'react'

const AddExpense = () => {
  return (
    <div className='flex flex-row justify-between bg-gray-300 p-2 my-[20px] divide-x divide-slate-200'>
      <div className='flex-1 text-center'>
        <h4 className='text-sm'>INCOME</h4>
        <p className='text-green-500 my-[5px]'>$ {}</p>
      </div>
      <div className='flex-1 text-center'>
        <h4 className='text-sm'>EXPENSE</h4>
        <p className='text-red-500 tex-[20px] my-[5px]'>$ {}</p>
      </div>
    </div>
  )
}

export default AddExpense

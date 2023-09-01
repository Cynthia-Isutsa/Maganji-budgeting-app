import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/globalState'

const AddTransanction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const {AddTransanction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text, 
      amount
    }

    AddTransanction(newTransaction)
  }

  return (
    <div>
      <div>
        <h3 className='text-xl border-b border-gray-300 font-bold pb-[10px] mt-[5px] mb-[5px]'>Add New Transanctions</h3>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='text'  className='inline-block font-bold my-[10px]'>Text</label>
            <input id= 'text' value={text} onChange={(e)=> setText(e.target.value)} className=' border border-gray-300 rounded-md block text-base p-2 w-full' type='text' placeholder='Enter text....' />
          </div>
          <div>
            <label className='inline-block font-bold my-4' htmlFor='Amount'>Amount <br /><i>(negative-expense, positive- income)</i></label>
            <input id='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)} className='border border-gray-300 rounded-md block text-base p-2 w-full' type='number' placeholder='Enter amount.....' />
          </div>
          <button className='cursor-pointer bg-indigo-600 shadow-indigo-800 text-white block text-base p-2  mt-4 mb-12 w-full focus: outline-none'>Add Transanction</button>
        </form>
      </div>
    </div>
  )
}

export default AddTransanction

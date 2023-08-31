import React, { useState } from 'react'

const AddTransanction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  return (
    <div>
      <div>
        <h3 className='text-xl border-b border-gray-300 font-bold pb-[10px] mt-[5px] mb-[5px]'>Add New Transanctions</h3>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor='text'  className='inline-block font-bold my-[10px]'>Text</label>
            <input value={text} onChange={(e)=> setText(e.target.value)} className=' border border-gray-300 rounded-md block text-base p-2 w-full' type='text' id='text' placeholder='Enter text....' />
          </div>
          <div>
            <label className='inline-block font-bold my-4' htmlFor='Amount'>Amount <br /><i>(negative-expense, positive- income)</i></label>
            <input  value={amount} onChange={(e)=> setAmount(e.target.value)} className='border border-gray-300 rounded-md block text-base p-2 w-full' type='number' id='amount' placeholder='Enter amount.....' />
          </div>
          <button className='cursor-pointer bg-indigo-600 shadow-indigo-800 text-white block text-base p-2  mt-4 mb-12 w-full'>Add Transanction</button>
        </form>
      </div>
    </div>
  )
}

export default AddTransanction

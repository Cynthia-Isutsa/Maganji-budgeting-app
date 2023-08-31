import React from 'react'

const Transaction = ({transaction}) => {
  return (
    <li className='bg-gray-300 text-[#333] flex justify-between relative shadow-gray-500 p-[10px] my-[10px]'>
        {transaction.text} <span>{transaction.amount}</span><button className='cursor-pointer bg-red-500 border-0 text-white text-2xl px-[5px] py-[2px] absolute top-1/2 left-0 -translate-x-[100%] -translate-y-1/2 opacity-0 transition-opacity duration-300 ease hover:opacity-100'>x</button>
    </li>
  )
}

export default Transaction

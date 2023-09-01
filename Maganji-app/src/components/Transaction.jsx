import React, {useContext} from 'react'
import { GlobalContext } from '../context/globalState'


const Transaction = ({transaction}) => {

  const {deleteTransaction} = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li className={`border-r-4 ${transaction.amount < 0 ? 'border-red-600' : 'border-green-600'} bg-gray-300 text-[#333] flex justify-between relative shadow-gray-500 p-[10px] my-[10px]`}>
    
    {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
    <button onClick={() => deleteTransaction(transaction.id)} className='cursor-pointer bg-red-500 text-white text-2xl px-[5px] py-[2px} absolute top-1/2 left-0 -translate-x-[100%] -translate-y-1/2 opacity-0 transition-opacity duration-300 ease hover:opacity-100'>x</button>
    </li>
  )
}

export default Transaction

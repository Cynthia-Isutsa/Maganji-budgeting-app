import React, {useContext} from 'react'
import  {GlobalContext } from '../context/globalState'
import Transaction from './Transaction'

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext)
  return (
    <div>
      
        <p className='text-xl border-b border-gray-300 pb-[10px] mt-[40px] mb-[10px]'>History</p>
        <ul className='mb-[40px]'>
          {transactions.map(transaction => (<Transaction  key = {transaction.id} transaction = {transaction }/>))} 
        </ul>
      
    </div>
  )
}

export default TransactionList

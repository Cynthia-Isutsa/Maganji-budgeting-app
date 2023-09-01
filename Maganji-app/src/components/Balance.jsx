import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'


const Balance = () => {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className='flex flex-col text-left my-3 mx-auto w-[350px]'>
      <div className='mb-1'>
        <h3 className='text-1xl'>YOUR BALANCE</h3>
      </div>
      <div>
        <p className='font-bold'>$ {total}</p>
      </div>
    </div>
  )
}

export default Balance

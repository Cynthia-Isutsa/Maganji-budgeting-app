import React from 'react'

const TransactionList = () => {
  return (
    <div>
      
        <p className='text-xl border-b border-gray-300 pb-[10px] mt-[40px] mb-[10px]'>History</p>
        <ul className='mb-[40px]'>
          <li className='bg-gray-300 text-[#333] flex justify-between relative shadow-gray-500 p-[10px] my-[10px]'>
            cash <span>-400</span><button className='cursor-pointer bg-red-500 border-0 text-white text-2xl px-[5px] py-[2px] absolute top-1/2 left-0 -translate-x-[100%] -translate-y-1/2 opacity-0 transition-opacity duration-300 ease hover:opacity-100'>x</button>
          </li>
        </ul>
      
    </div>
  )
}

export default TransactionList

import React from 'react'

const Balance = () => {
  return (
    <div className='flex flex-col text-left my-3 mx-auto w-[350px]'>
      <div className='mb-1'>
        <h3 className='text-1xl'>YOUR BALANCE</h3>
      </div>
      <div>
        <p className='font-bold'>$ {}</p>
      </div>
    </div>
  )
}

export default Balance

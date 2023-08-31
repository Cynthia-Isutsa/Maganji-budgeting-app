import React from 'react'
import {Header, TransanctionList, IncomeExpense, Balance, AddTransanction} from './components'
import {GlobalProvider} from './context/globalState'


const App = () => {
  return (
    <div className='bg-gray-400 flex flex-col justify-center items-center min-h-[100vh]'>
      <GlobalProvider>
        <Header />
        <div className='my-30px mx-auto max-w-[350px]'>
          <Balance />
          <IncomeExpense />
          <TransanctionList />
          <AddTransanction />
        </div>
      </GlobalProvider>
    </div>
  )
}

export default App

import React, {createContext, useReducer} from 'react'
import appReducer from './appReducer'

const initialState = {
    transactions:[]
}


//create context
export const  GlobalContext = createContext(initialState)

//provider component 
 export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

//actions
function deleteTransaction(id) {
     dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
     })
}

function AddTransanction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload: transaction
    })
}


    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        AddTransanction
    }}>
        {children}
    </GlobalContext.Provider>)
 }

 

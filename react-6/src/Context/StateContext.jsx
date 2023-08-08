import { createContext, useContext, useReducer} from "react";

export const StateContext = createContext()

export const StateContextProvider = ({children}) => {

    const initialState = {
        count : 0 ,
        value : 10
      }
    const reducer = (state , action) => {
        switch(action.type){
          case "increase" :
          return {...state , count : state.count + action.payload};
          case "increase2":
            return {...state , value : state.value + 10};
          default:
            return state
        }
      }
    
    const [state , dispatch] = useReducer(reducer , initialState)

    const name = "Min Lay"
    const id = 1

    const data = {state , dispatch}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = () => useContext(StateContext)
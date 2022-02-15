import { createContext, useReducer, useContext } from 'react';
export const StateContext = createContext();
// 래핑, 데이터 제공
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
// 각각 전달
export const useStateValue = () => useContext(StateContext);
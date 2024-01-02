//setup data layer.
//need to track the basket

import React,{ createContext, useContext, useReducer } from "react";

//THIS IS DATA LAYER
export const StateContext = createContext({});

//BUILD A PROVIDER [REDUCER]
//we can only acess data in chilf of this provider.
export const StateProvider = ({reducer,initialState,children}) => (
  <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
);

//THIS IS HOW WE USE IT INSIDE COMPONENT
//useContext lets us subscribe to context from your component i.e is Statecontext
export const useStateValue = () => useContext(StateContext);

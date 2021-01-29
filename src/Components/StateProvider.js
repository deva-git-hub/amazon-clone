//setup data layer
// we need this to track the basket

import React, { createContext, useReducer, useContext } from "react";

//this is data layer
export const StateContext = createContext();

//build a provider

export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside of a constant
export const useStateValue = () => useContext(StateContext);

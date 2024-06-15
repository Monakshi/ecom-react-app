import React, { Children, createContext, useState } from 'react';
export const Data = createContext();
const DataProvider = ( { childern}) => {
      const [count,setCount] = useState(0);
  return (
    <Data.Provider value = {{count,setCount}}>{Children}</Data.Provider> 
  )
}

export default  DataProvider


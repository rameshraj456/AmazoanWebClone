import React, { createContext, useState } from 'react';
export const LoginContext = createContext(null);

const ContexProvider = ({children}) => {
    const [account, setAccount] = useState({
      carts:[]
    });
  return (
    <>
      <LoginContext.Provider value={{ account, setAccount }}>
        {children}
      </LoginContext.Provider>

    </>
  )
}

export default ContexProvider;

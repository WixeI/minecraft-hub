import React, { createContext, useContext, useState } from 'react'

export const ObjectContext = createContext({});

export default function ObjectProvider({children}) {
    
    return (
        <ObjectContext.Provider 
            value={{
                //Variables

                //Functions

            }}
        >
            {children}
        </ObjectContext.Provider>
    )
}

export const useObject = () => useContext(ObjectContext);

// Import "UseObject" and use it in place of useContext(ObjectContext)
// Example:
    // const {testHook} = useObject();
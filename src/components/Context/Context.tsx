import React, { useState } from 'react';
import { Children, IContext } from '../common/types/context'

export const AppContext = React.createContext<IContext>({
    isDark: true,
    setIsDark: () => {}
});

export const AppProvider = ({children} : Children) => {

  const [isDark, setIsDark] = useState<boolean>(true)
  
  return (<AppContext.Provider
            value={{isDark, setIsDark}}>{children}
        </AppContext.Provider>)
}

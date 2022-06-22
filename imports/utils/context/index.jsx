import { createContext, useContext } from "react";

const AppContext = createContext();
AppContext.displayName = "AppContext";

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useApp must be used within a AppContext Provider`);
  }
  return context;
}

export default AppContext;

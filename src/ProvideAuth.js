import React, { createContext, useContext } from "react";
import useProvideAuth from "./useProvideAuth";

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

export default ProvideAuth;

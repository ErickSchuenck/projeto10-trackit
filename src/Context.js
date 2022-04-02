import { createContext } from "react";
const context = createContext({
  token: null,
  setToken: () => { },
});

export default context;
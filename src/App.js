import React, { createContext } from "react";
import Links from "./components/Links.js";
import store from "./stores/index.js";

const GlobalStore = createContext(store);

function App() {
  return (
    <GlobalStore.Provider>
      <Links />
    </GlobalStore.Provider>
  );
}

export default App;

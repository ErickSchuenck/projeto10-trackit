import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import RegisterScreen from "./RegisterScreen"
import Home from "./Home"
import Today from "./Today"
import Historico from './Historico'
import UserDataContext from "./context/UserDataContext";
import { useState } from "react";

function App() {
  const [context, setContext] = useState([])
  return (
    <UserDataContext.Provider value={[context, setContext]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeScreen />} />
          <Route path='/cadastro' element={<RegisterScreen />} />
          <Route path='/habitos' element={<Home />} />
          <Route path='/hoje' element={<Today />} />
          <Route path='/historico' element={<Historico />} />

        </Routes>
      </BrowserRouter>
    </UserDataContext.Provider>
  )
}

export default App;
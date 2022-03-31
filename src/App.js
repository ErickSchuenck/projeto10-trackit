import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import RegisterScreen from "./RegisterScreen"
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/cadastro' element={<RegisterScreen />} />
        <Route path='/habitos' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
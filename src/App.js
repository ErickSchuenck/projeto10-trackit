import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import RegisterScreen from "./RegisterScreen"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/cadastro' element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
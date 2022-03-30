import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
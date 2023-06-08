import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Auth } from "./components/auth/Auth";
import { Home } from "./Home";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-50">
      <Router>
      {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Auth />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

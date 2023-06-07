import { Login } from "./Login";
import { Home } from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-50">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

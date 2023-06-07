import { Login } from "./Login";
import { Home } from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
      </Router>
    </>
  )
}

export default App

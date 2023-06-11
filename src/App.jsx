import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { PrivateRoutes } from "./utils/PrivateRoutes";
import { SignIn } from "./components/authorization/SignIn";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-50">
      <Router>
            {/* <Header /> */}
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} exact path="/home" ></Route>
          </Route>
          <Route exact path="/" element={<SignIn />}></Route>
        </Routes>

      </Router>
    </div>
  )
}

export default App

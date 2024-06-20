import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
// import My from './pages/My';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        {/* <Route path="/My" element={<My />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

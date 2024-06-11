import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/join";
import LogIn from "./pages/logIn";
import Main from "./pages/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/Join" element={<Join />}></Route>
        <Route path="/Main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/join";
import LogIn from "./pages/logIn";
import Main from "./pages/main";
import My from "./pages/My";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/Join" element={<Join />}></Route>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/My" element={<My />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

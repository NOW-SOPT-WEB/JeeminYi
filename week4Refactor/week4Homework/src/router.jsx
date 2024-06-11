import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/join";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />}></Route>
        <Route path="/Join" element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

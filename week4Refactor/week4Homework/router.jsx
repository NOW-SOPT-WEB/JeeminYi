import { BrowerRouter, Route, Routes } from "react-router-dom";
import Join from "./src/pages/join";

const Router = () => {
  return (
    <BrowerRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/Join" element={<Join />}></Route>
      </Routes>
    </BrowerRouter>
  );
};

export default Router;

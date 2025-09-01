import { Route, Routes } from "react-router-dom";

import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Home from "@/pages/Home";
import Providers from "@/providers";

import "./App.css";

const App = () => {
  return (
    <Providers>
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex-1 max-w-screen-2xl pt-[70px] mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Providers>
  );
};

export default App;

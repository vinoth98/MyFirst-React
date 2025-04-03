//import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import Login from "@/components/utility/Login";
import Counter from "./components/utility/Counter";
import Country from "./components/utility/Country";
import Dashboard from "./components/pages/Dashboard";
import Layout from "./components/pages/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="wrapper flex" style={{ "margin-left": "15rem" }}>
      {/* <Login></Login> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Country" element={<Country />} />
      </Routes>

      {/* <Login>
        <form></form>
      </Login>
      <Counter></Counter> */}
      {/* <div className="flex flex-col items-center justify-center">
        <Button variant="bg-secondary text-white">Click memee</Button>
      </div> */}
    </div>
  );
}

export default App;

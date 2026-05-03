import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import IntakeForm from "../pages/IntakeForm";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/intake" element={<IntakeForm />}/>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
  )
}

export default AppRoutes

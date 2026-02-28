import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Orders from "./pages/Orders";
function App() {
  return (
    <Routes>
    
        <Route path="/" element={<Landing />} /> 
     

      <Route element={<MainLayout />}> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
     </Route>
    </Routes>
  );
}

export default App;
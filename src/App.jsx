import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import User from "./pages/User"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<Home/>}>
        <Route path='settings' element={<Settings/>}/>
      </Route>      
      <Route path="/user/:id" element={<User />} />

    </Routes>

  );
}
export default App;

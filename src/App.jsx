import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div
className="bg-[rgb(32,37,40)]">
 <div className="">
 <Navbar />  
 </div>
      <Outlet />  
    </div>
  );
};

export default App;
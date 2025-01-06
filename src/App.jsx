import { Outlet } from "react-router-dom"; // Import Outlet to render child routes
import Navbar from "./Components/Navbar"; // Your Navbar component

const App = () => {
  return (
    <div>
      <Navbar />  {/* Render the Navbar at the top */}
      <Outlet />  {/* Render the active route content here */}
    </div>
  );
};

export default App;

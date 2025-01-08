import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex justify-around">
  <Link to='/'>home</Link>
  <Link to='/about'>about</Link>
    </div>
  );
};

export default Navbar;
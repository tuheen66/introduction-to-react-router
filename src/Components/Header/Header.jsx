/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <h2>My Website</h2>

        {/* use NavLink i/o Link to have active class  */}
        
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        {/* <Link to='/user'>User Details</Link> */}
      </nav>
    </div>
  );
};

export default Header;

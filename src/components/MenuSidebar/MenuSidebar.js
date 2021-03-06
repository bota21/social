import { NavLink } from "react-router-dom";
import './MenuSidebar.css'

const MenuSidebar = () => {
  return (
    <nav className='menu'>
      <NavLink to='/profile' className='link' activeClassName='active'>Profile</NavLink>
      <NavLink to='/messages' className='link' activeClassName='active'>Messages</NavLink>
      <NavLink to='/friends' className='link' activeClassName='active'>Friends</NavLink>
      <NavLink to='/community' className='link' activeClassName='active'>Community</NavLink>
    </nav>
  );
};
export default MenuSidebar;

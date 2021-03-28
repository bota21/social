import { NavLink } from "react-router-dom";
import './MenuHeader.css'

const MenuHeader = () => {
  return (
    <nav className='header_menu'>
    <NavLink to='/profile' className='link_header' activeClassName='active_header'>
      Profile
    </NavLink>
    <NavLink to='/messages' className='link_header' activeClassName='active_header'>
      Messages
    </NavLink>
    <NavLink to='/friends' className='link_header' activeClassName='active_header'>
      Friends
    </NavLink>
    <NavLink to='/community' className='link_header' activeClassName='active_header'>
      Community
    </NavLink>
  </nav>
  );
};
export default MenuHeader;

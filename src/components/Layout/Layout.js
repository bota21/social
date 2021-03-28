import MenuSidebar from "../MenuSidebar/MenuSidebar";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Layout.css";
import MenuHeader from "./MenuHeader/MenuHeader";
import { useState } from "react";

const Layout = ({ children }) => {
  const [openBurger, setopenBurger] = useState(false);

  const burgerHandler = () => {
    setopenBurger(!openBurger);
  };

  return (
    <div className='layout'>
      <div className='header'>
        <div className='logo_wrapper'>
        <a href='/' className='logo'> </a>
        </div>        
         {openBurger ? <MenuHeader/> : null}
         <div className='icon'>
         <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={burgerHandler}
      >
        <MoreVertIcon />
      </IconButton>
         </div>
        
      </div>
      <div className='sidebar'>
        <MenuSidebar />
      </div>
      <main className='main'>{children}</main>
    </div>
  );
};

export default Layout;

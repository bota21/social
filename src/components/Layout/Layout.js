import Menu from "../Menu/Menu";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='header'>
        <a href='/' className='logo'>
        </a>
      </div>
      <div className='sidebar'>
        <Menu/>
      </div>
      <main className='main'>{children}</main>
    </div>
  );
};

export default Layout;

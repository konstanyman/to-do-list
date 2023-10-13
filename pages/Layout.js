import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
        <button className="route-btn">
            <Link to="/">To-do-list</Link>
        </button>
        <button className="route-btn">
            <Link to="/calendar">Calendar</Link>
        </button>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
// Name: Erick Diaz    Date: 11/23/23

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Game Website
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/games">
                  Games
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet/>
    </>
    )
};

export default Layout;
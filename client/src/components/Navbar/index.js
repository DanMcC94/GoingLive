import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/members">
                Going Live!
      </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/members"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/members"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Members
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/calendar"
                            className={window.location.pathname === "/calendar" ? "nav-link active" : "nav-link"}
                        >
                            Calendar
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >
                            Search Games
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                        >
                            Logout
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

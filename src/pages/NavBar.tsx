import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primar p-3">
            <a className="navbar-brand fs-1" id="header-text" href="/">
                Sync RP
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarItems"
                aria-controls="navbarItems"
                aria-expanded="false"
                aria-label="Toggle Navigation"
            >
                <span className="navbar-toggler-icon">
                    <i className="fas fa-bars" style={{ color: '#fff', fontSize: '28px' }}></i>
                </span>
            </button>

            <div className="collapse navbar-collapse text-center fs-4" id="navbarItems">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item px-1">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
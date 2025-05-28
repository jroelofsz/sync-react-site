import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-white p-3">
            <a className="navbar-brand text-white fs-1" id="header-text" href="/">
                Lebubble Scripts
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
                        <NavLink className="nav-link text-white" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/scripts">
                            Scripts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
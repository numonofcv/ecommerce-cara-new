import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import {BsBag} from "react-icons/bs";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {HiOutlineX} from "react-icons/hi";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    const linkClass = ({isActive}) => (isActive ? "navbar__link navbar__link--active" : "navbar__link");

    const drawerLinkClass = ({isActive}) =>
        isActive ? "navbar__drawer-link navbar__drawer-link--active" : "navbar__drawer-link";

    return (
        <header className="navbar">
            <div className="navbar__topline" />

            <div className="navbar__inner">
                <div className="navbar__left">
                    <NavLink to="/" className="navbar__brand" aria-label="Cara home" onClick={closeMenu}>
                        <img src={logo} alt="Cara" className="navbar__logo-img" />
                    </NavLink>
                </div>
                <div className="navbar__right">
                    <nav className="navbar__nav" aria-label="Main navigation">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <NavLink to="/" className={linkClass} end>
                                    Home
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <NavLink to="/shop" className={linkClass}>
                                    Shop
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <NavLink to="/blog" className={linkClass}>
                                    Blog
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <NavLink to="/about" className={linkClass}>
                                    About
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <NavLink to="/contact" className={linkClass}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="navbar__actions">
                        <button className="navbar__cart" aria-label="View cart">
                            <BsBag className="navbar__icon" />
                        </button>

                        <button
                            className="navbar__hamburger"
                            aria-label="Open menu"
                            aria-expanded={menuOpen}
                            onClick={openMenu}
                        >
                            <HiOutlineMenuAlt3 className="navbar__icon" />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={menuOpen ? "navbar__backdrop navbar__backdrop--visible" : "navbar__backdrop"}
                onClick={closeMenu}
            />

            <aside
                className={menuOpen ? "navbar__drawer navbar__drawer--open" : "navbar__drawer"}
                aria-hidden={!menuOpen}
            >
                <div className="navbar__drawer-header">
                    <button className="navbar__drawer-close" aria-label="Close menu" onClick={closeMenu}>
                        <HiOutlineX className="navbar__close-icon" />
                    </button>
                </div>

                <nav className="navbar__drawer-nav" aria-label="Mobile navigation">
                    <ul className="navbar__drawer-list">
                        <li className="navbar__drawer-item">
                            <NavLink to="/" className={drawerLinkClass} onClick={closeMenu} end>
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar__drawer-item">
                            <NavLink to="/shop" className={drawerLinkClass} onClick={closeMenu}>
                                Shop
                            </NavLink>
                        </li>
                        <li className="navbar__drawer-item">
                            <NavLink to="/blog" className={drawerLinkClass} onClick={closeMenu}>
                                Blog
                            </NavLink>
                        </li>
                        <li className="navbar__drawer-item">
                            <NavLink to="/about" className={drawerLinkClass} onClick={closeMenu}>
                                About
                            </NavLink>
                        </li>
                        <li className="navbar__drawer-item">
                            <NavLink to="/contact" className={drawerLinkClass} onClick={closeMenu}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </header>
    );
};

export default Navbar;

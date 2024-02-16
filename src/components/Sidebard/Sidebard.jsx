import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


const Sidebard = () => {
    return (
        <>
            <nav
                className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
                id="navbarVertical"
            >
                <div className="container-fluid">
                    {/* Toggler */}
                    <button
                        className="navbar-toggler ms-n2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Brand */}
                    <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                        <img
                            src={Logo}
                            alt="San Igancio de Loyola"
                        />
                    </a>
                    {/* User menu (mobile) */}
                    <div className="navbar-user d-lg-none">
                        {/* Dropdown */}
                        <div className="dropdown">
                            {/* Toggle */}
                            <a
                                href="#"
                                id="sidebarAvatar"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <div className="avatar-parent-child">
                                    <img
                                        alt="Image Placeholder"
                                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                        className="avatar avatar- rounded-circle"
                                    />
                                    <span className="avatar-child avatar-badge bg-success" />
                                </div>
                            </a>
                            {/* Menu */}
                            <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="sidebarAvatar"
                            >
                                <a href="#" className="dropdown-item">
                                    Profile
                                </a>
                                <a href="#" className="dropdown-item">
                                    Settings
                                </a>
                                <a href="#" className="dropdown-item">
                                    Billing
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="sidebarCollapse">
                        {/* Navigation */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">
                                    <i className="bi bi-house" /> Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-people" /> Users
                                </a>
                            </li>
                        </ul>
                        {/* Divider */}
                        <hr className="navbar-divider my-5 opacity-20" />

                        {/* Push content down */}
                        <div className="mt-auto" />
                        {/* User (md) */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-person-square" /> Mi perfil
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-box-arrow-left" /> Cerrar Sesión
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebard
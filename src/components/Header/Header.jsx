import Logo from '../../assets/logo.png'
import './header.css';


const Header = () => {
    return (
        <>
            <header className="navbar header sticky-top flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
                    <img src={Logo} alt="Logo" className='navbar-logo' />
                </a>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </header>
        </>
    )
}

export default Header
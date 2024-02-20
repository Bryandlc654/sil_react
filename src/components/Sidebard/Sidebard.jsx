/*
import API_URL from '../../api/api';
 */
import { Link } from 'react-router-dom';
import './sidebard.css'

const Sidebard = () => {
  /* const logout = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          await fetch(`${API_URL}auth/logout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
        }
        localStorage.removeItem('token');
        window.location.href = '/login';
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    }; */

  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <i className="bi bi-bar-chart me-2"></i>
                Dashboard
              </a>
            </li>
            <li>
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <i className="bi bi-people me-2"></i>
                      Usuarios
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <Link className="nav-link" aria-current="page" to="/register-user">
                        Registrar Usuario
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebard
import { useEffect, useState } from "react";
import API_URL from "../../api/api";
import { format } from "date-fns";
const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userallData, setUserallData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        try {
          const response = await fetch(`${API_URL}auth/me`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
          }

          const userData = await response.json();
          setUserData(userData);
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUserallData = async () => {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        try {
          const response = await fetch(`${API_URL}auth/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error("Error al obtener todos los usuarios");
          }

          const userData = await response.json();
          setUserallData(userData.users);
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchUserallData();
  }, []);
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    return currentDate.toLocaleDateString('es-ES', options);
  };
  return (
    <>
      {/* Main content */}
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        {/* Header */}
        <header className="bg-surface-primary border-bottom pt-6">
          <div className="container-fluid">
            <div className="mb-npx">
              <div className="row align-items-center">
                <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                  {/* Title */}
                  {userData ? (
                    <div>
                      <h2 className="h2 mb-0 ls-tight">
                        Hola, {userData.name}
                      </h2>
                      <span>{getCurrentDate()}</span>
                    </div>
                  ) : (
                    <p>Cargando datos del usuario...</p>
                  )}


                  <br />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Main */}
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
            {/* Card stats */}
            <div className="row g-6 mb-6">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                          Budget
                        </span>
                        <span className="h3 font-bold mb-0">$750.90</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                          <i className="bi bi-credit-card" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                      <span className="badge badge-pill bg-soft-success text-success me-2">
                        <i className="bi bi-arrow-up me-1" />
                        13%
                      </span>
                      <span className="text-nowrap text-xs text-muted">
                        Since last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                          New projects
                        </span>
                        <span className="h3 font-bold mb-0">215</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                          <i className="bi bi-people" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                      <span className="badge badge-pill bg-soft-success text-success me-2">
                        <i className="bi bi-arrow-up me-1" />
                        30%
                      </span>
                      <span className="text-nowrap text-xs text-muted">
                        Since last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                          Total hours
                        </span>
                        <span className="h3 font-bold mb-0">1.400</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                          <i className="bi bi-clock-history" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                      <span className="badge badge-pill bg-soft-danger text-danger me-2">
                        <i className="bi bi-arrow-down me-1" />
                        -5%
                      </span>
                      <span className="text-nowrap text-xs text-muted">
                        Since last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                          Work load
                        </span>
                        <span className="h3 font-bold mb-0">95%</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                          <i className="bi bi-minecart-loaded" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                      <span className="badge badge-pill bg-soft-success text-success me-2">
                        <i className="bi bi-arrow-up me-1" />
                        10%
                      </span>
                      <span className="text-nowrap text-xs text-muted">
                        Since last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow border-0 mb-7">
              <div className="card-header">
                <h5 className="mb-0">Applications</h5>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Company</th>
                      <th scope="col">Offer</th>
                      <th scope="col">Meeting</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {userallData &&
                      userallData.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <img
                              alt="..."
                              src={user.Usuario_foto}
                              className="avatar avatar-sm rounded-circle me-2"
                            />
                            <a className="text-heading font-semibold" href="#">
                              {user.Usuario_apellidos}
                            </a>
                          </td>
                          {/* <td>{user.created_at}</td> */}
                          <td>{format(new Date(user.created_at), "dd/MM/yyyy HH:mm")}</td>
                          <td>
                            <img
                              alt="..."
                              src={user.rol.Rol_foto}
                              className="avatar avatar-xs rounded-circle me-2"
                            />
                            <a className="text-heading font-semibold" href="#">
                              {user.rol.Rol_nombre}
                            </a>
                          </td>
                          <td>$2.750</td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-warning" />
                              Postponed
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">
                              View
                            </a>
                            <button
                              type="button"
                              className="btn btn-sm btn-square btn-neutral text-danger-hover"
                            >
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>

                      ))}
                   
                     
                  </tbody>
                </table>
              </div>
              <div className="card-footer border-0 py-5">
                <span className="text-muted text-sm">
                  Showing 10 items out of 250 results found
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

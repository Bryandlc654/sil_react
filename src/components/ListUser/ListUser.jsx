
const ListUser = () => {
    // Función para abrir el modal
    const openModal = (modalId) => {
        const modal = new window.bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    };
    return (
        <>
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
                <h2>Lista de Usuarios</h2>
                <hr />
                <br />
                {/* TABLE */}
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Nombres</th>
                                <th scope="col">DNI</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Status</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Gestión</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>De la Cruz Soto</td>
                                <td>Bryan</td>
                                <td>71562624</td>
                                <td>948521905</td>
                                <td>Habilitado</td>
                                <td>Administrador</td>
                                <td className="d-flex gap-2 p-0 py-1">
                                    <button type="button" title="Ver Usuario" className="btn btn-success" onClick={() => openModal('viewModal')}><i className="bi bi-eye"></i></button>
                                    <button type="button" title="Editar Usuario" className="btn btn-warning" onClick={() => openModal('editModal')}><i className="bi bi-pencil"></i></button>
                                    <button type="button" title="Deshabilitar Usuario" className="btn btn-danger" onClick={() => openModal('deleteModal')}><i className="bi bi-person-x"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* MODALS */}
                <div>
                    {/* MODAL VIEW */}
                    <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title fs-5" id="exampleModalLabel">Información del usuario</h3>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="card p-4">
                                        <form className="overflow-auto modal-form p-2">
                                            <div className="mb-3">
                                                <label htmlFor="inputApellido" className="form-label">
                                                    Apellidos
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputApellido"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputNombre" className="form-label">
                                                    Nombres
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputNombre"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputDni" className="form-label">
                                                    DNI
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputDni"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputFechaNac" className="form-label">
                                                    Fecha de nacimiento
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputFechaNac"
                                                    disabled
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="inputSexo" className="form-label">
                                                    Sexo
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputSexo"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputDireccion" className="form-label">
                                                    Dirección
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputDireccion"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputDistrito" className="form-label">
                                                    Distrito
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputDistrito"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputProvincia" className="form-label">
                                                    Provincia
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputProvincia"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputDepartamento" className="form-label">
                                                    Departamento
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputDepartamento"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputCelular" className="form-label">
                                                    Celular
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputCelular"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputStatus" className="form-label">
                                                    Status
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputStatus"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputRol" className="form-label">
                                                    Rol
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputRol"
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputEmail" className="form-label">
                                                    Correo
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputEmail"
                                                    disabled
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MODAL EDIT */}
                    <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title fs-5" id="exampleModalLabel">Editar información del usuario</h3>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="card p-4">
                                        <form className="overflow-auto modal-form p-2">
                                            <div className="mb-3">
                                                <label htmlFor="inputApellido" className="form-label">
                                                    Apellidos
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputApellido"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputNombre" className="form-label">
                                                    Nombres
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputNombre"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputDni" className="form-label">
                                                    DNI
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputDni"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputFechaNac" className="form-label">
                                                    Fecha de nacimiento
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputFechaNac"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputSexo" className="form-label">
                                                    Sexo
                                                </label>
                                                <select className="form-select" aria-label="Default select example" id="inputSexo">
                                                    <option selected>Elegir...</option>
                                                    <option value="1">Masculino</option>
                                                    <option value="2">Femenino</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputDireccion" className="form-label">
                                                    Dirección
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputDireccion"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputDistrito" className="form-label">
                                                    Distrito
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputDistrito"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputProvincia" className="form-label">
                                                    Provincia
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputProvincia"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputDepartamento" className="form-label">
                                                    Departamento
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputDepartamento"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputCelular" className="form-label">
                                                    Celular
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputCelular"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputStatus" className="form-label">
                                                    Status
                                                </label>
                                                <select className="form-select" aria-label="Default select example" id="inputStatus">
                                                    <option selected>Elegir...</option>
                                                    <option value="1">Habilitado</option>
                                                    <option value="2">Deshabilitado</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputRol" className="form-label">
                                                    Rol
                                                </label>
                                                <select className="form-select" aria-label="Default select example" id="inputRol">
                                                    <option selected>Elegir...</option>
                                                    <option value="">Alumno</option>
                                                    <option value="">Profesor</option>
                                                    <option value="">Secretaria</option>
                                                    <option value="">Administrador</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="inputEmail" className="form-label">
                                                    Correo
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputEmail"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-primary">Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MODAL DELETE */}
                    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title fs-5" id="exampleModalLabel">Advertencia</h3>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ¿Estás seguro de Deshabilitar este usuario?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-danger">Deshabilitar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListUser

const RegisterUser = () => {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
        <h2>Registrar Usuario</h2>
        <hr />
        <br />
        <form className="row g-3">
          <div className="col-md-2">
            <label htmlFor="inputDni" className="form-label">
              DNI
            </label>
            <input type="text" className="form-control" id="inputDni" />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputApellidos" className="form-label">
              Apellidos
            </label>
            <input type="text" className="form-control" id="inputApellidos" />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputNombres" className="form-label">
              Nombres
            </label>
            <input type="text" className="form-control" id="inputNombres" />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputSexo" className="form-label">
              Sexo
            </label>
            <select id="inputSexo" className="form-select">
              <option selected="">Elegir...</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputDireccion" className="form-label">
              Direccion
            </label>
            <input type="text" className="form-control" id="inputDireccion" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputDistrito" className="form-label">
              Distrito
            </label>
            <input type="text" className="form-control" id="inputDistrito" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputProvincia" className="form-label">
              Provincia
            </label>
            <input type="text" className="form-control" id="inputProvincia" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputDepartamento" className="form-label">
              Departamento
            </label>
            <input type="text" className="form-control" id="inputDepartamento" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputCelular" className="form-label">
              Celular
            </label>
            <input type="text" className="form-control" id="inputCelular" />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputStatus" className="form-label">
              Status
            </label>
            <select id="inputStatus" className="form-select">
              <option selected="">Elegir...</option>
              <option>Activo</option>
              <option>Deshabilitado</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="formFileFoto" className="form-label">
              Foto
            </label>
            <input className="form-control form-control-md" id="formFileFoto" type="file" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputRol" className="form-label">
              Rol
            </label>
            <select id="inputRol" className="form-select">
              <option selected="">Elegir...</option>
              <option>Alumno</option>
              <option>Profesor</option>
              <option>Secretaria</option>
              <option>Administrador</option>
            </select>
          </div>
          <div className="col-md-5">
            <label htmlFor="inputCorreo" className="form-label">
              Correo
            </label>
            <input type="text" className="form-control" id="inputCorreo" />
          </div>
          <div className="col-md-4 mb-4">
            <label htmlFor="inputContrasena" className="form-label">
              Contraseña
            </label>
            <input type="text" className="form-control" id="inputContrasena" />
          </div>
          <hr />

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterUser

import FunctionRegister from "./function/FuctionRegister";
const RegisterUser = () => {
  const {
    formData,
    roles,
    handleSelectChange,
    handleSubmit,
    handleInputChange,
    handleImageChange,
    successMessage,
    errorMessage,
  } = FunctionRegister();
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
        {successMessage && (
          <span style={{ color: "#0f7ef1" }}>{successMessage}</span>
        )}
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}

        <h2>Registrar Usuario</h2>
        <hr />
        <br />
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-2">
            <label htmlFor="Usuario_dni" className="form-label">
              DNI
            </label>
            <input
              type="text"
              className="form-control"
              id="Usuario_dni"
              onChange={handleInputChange}
              maxLength="8"
              pattern="\d{8}"
              title="Debe tener exactamente 8 dígitos"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="Usuario_apellidos" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="Usuario_apellidos"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="Usuario_fnacimiento" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="Usuario_fnacimiento"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="name" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Usuario_sexo" className="form-label">
              Sexo
            </label>
            <select
              id="Usuario_sexo"
              className="form-select"
              onChange={handleInputChange}
            >
              <option value>Elegir...</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="Usuario_direccion" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              id="Usuario_direccion"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Usuario_distrito" className="form-label">
              Distrito
            </label>
            <input
              type="text"
              className="form-control"
              id="Usuario_distrito"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Usuario_provincia" className="form-label">
              Provincia
            </label>
            <input
              type="text"
              className="form-control"
              id="Usuario_provincia"
              onChange={(e) => {
                handleInputChange(e);
                handleImageChange(e);
              }}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Usuario_departamento" className="form-label">
              Departamento
            </label>
            <input
              type="text"
              className="form-control"
              id="Usuario_departamento"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Usuario_celular" className="form-label">
              Celular
            </label>
            <input
              type="text"
              className="form-control"
              id="Usuario_celular"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Usuario_status" className="form-label">
              Status
            </label>
            <select
              id="Usuario_status"
              className="form-select"
              onChange={handleInputChange}
            >
              <option value>Elegir...</option>
              <option>Activo</option>
              <option>Deshabilitado</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="formFileFoto" className="form-label">
              Foto
            </label>

            <input
              className="form-control form-control-md"
              id="formFileFoto"
              type="file"
              onChange={handleImageChange} // Utiliza handleImageChange aquí
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputRol" className="form-label">
              Rol
            </label>
            <select
              id="inputRol"
              className="form-select"
              name="Rol_id"
              onChange={handleSelectChange} // Utiliza handleSelectChange aquí
              value={formData.Rol_id}
            >
              <option value="">Elegir...</option>
              {roles.map((rol) => (
                <option key={rol.Rol_id} value={rol.Rol_id}>
                  {rol.Rol_nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-5">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-4">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              onChange={handleInputChange}
            />
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
  );
};

export default RegisterUser;

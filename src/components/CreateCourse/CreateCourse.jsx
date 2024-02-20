
const CreateCourse = () => {
    return (
        <>
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
                <h2>Registrar Curso</h2>
                <hr />
                <br />
                <form className="row g-3">
                    <div className="col-md-2">
                        <label htmlFor="inputCodigo" className="form-label">
                            Codigo
                        </label>
                        <input type="text" className="form-control" id="inputCodigo" />
                    </div>
                    <div className="col-md-10">
                        <label htmlFor="inputNombre" className="form-label">
                            Nombre del Curso
                        </label>
                        <input type="text" className="form-control" id="inputNombre" />
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

export default CreateCourse
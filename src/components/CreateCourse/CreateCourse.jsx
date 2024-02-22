import{ useState } from 'react';
import API_URL from '../../api/api';
const CreateCourse = () => {
    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Obtener el token de autorización del localStorage
        const token = localStorage.getItem('token');

        // Construir el objeto de datos del curso
        const data = {
            Curso_codigo: codigo,
            Curso_nombre: nombre
            
        };
        console.log(data);
        try {
            const response = await fetch(`${API_URL}auth/new/course`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSuccessMessage('Curso creado exitosamente');
                setErrorMessage('');
            } else {
                throw new Error('Error al crear el curso');
            }
        } catch (error) {
            setErrorMessage('Error al crear el curso');
            setSuccessMessage('');
            console.error('Error:', error);

        }
    };
    return (
        <>
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
                <h2>Registrar Curso</h2>
                <hr />
                <br />
                {successMessage && <span className="text-success">{successMessage}</span>}
                {errorMessage && <span className="text-danger">{errorMessage}</span>}
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-2">
                        <label htmlFor="inputCodigo" className="form-label">
                            Codigo
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputCodigo" 
                            value={codigo} 
                            onChange={(e) => setCodigo(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="col-md-10">
                        <label htmlFor="inputNombre" className="form-label">
                            Nombre del Curso
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputNombre" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required
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
    )
}

export default CreateCourse
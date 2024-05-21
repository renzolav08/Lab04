import React from 'react';

const Aside = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
    }

    return (
        <aside style={{ backgroundColor: '#A890EA', padding: '20px', borderRadius: '10px' }}>
            <h1 className="text-center" style={{ color: '#fff' }}>Bienvenidos</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="inputName" style={{ color: '#fff', marginBottom: '5px' }}>Nombre</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Ingrese su nombre" style={{ color: '#fff' }} required />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="inputPhone" style={{ color: '#fff', marginBottom: '5px' }}>Teléfono</label>
                    <input type="tel" className="form-control" id="inputPhone" placeholder="Ingrese su número de teléfono" style={{ color: '#fff' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="inputLaptopModel" style={{ color: '#fff', marginBottom: '5px' }}>Modelo de Laptop</label>
                    <input type="text" className="form-control" id="inputLaptopModel" placeholder="Ingrese el modelo de la laptop de interés" style={{ color: '#fff' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="inputNeed" style={{ color: '#fff', marginBottom: '5px' }}>Necesidad</label>
                    <textarea className="form-control" id="inputNeed" placeholder="Describa brevemente sus necesidades" rows="3" style={{ color: '#fff' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#7751DD', borderColor: '#7751DD' }}>Enviar</button>
            </form>
        </aside>
    );
}

export default Aside;


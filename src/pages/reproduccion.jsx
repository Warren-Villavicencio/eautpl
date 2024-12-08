import './estilos.css';
const reproduccion = () => {
    return (
      <div>
        <h1>reproduccion</h1>
        <h2>Formulario de Contacto</h2>
    <div>
        <label for="nombre">Nombre:</label>
        
    </div>
    <div>
        <label for="apellido">Apellido:</label>
        
    </div>
    <div>
        <label for="email">Correo Electrónico:</label>
        
    </div>
    <div>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>
    </div>


      </div>
    );
  };
  
  export default reproduccion;
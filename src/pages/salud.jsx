import './estilos.css';

const Salud = () => {
  return (
    <div className="salud-container">
      <h2>Historia Clínica</h2>
      <div className="info-container">
        <p>Número de Identificación: 00123</p>
        <p>Fecha de Revisión: 20/05/2024</p>
        <p>Veterinario: Dr. Martínez</p>
      </div>
      <h3>Vacunaciones</h3>
      <ul>
        <li>Brucelosis: 15/05/2024</li>
      </ul>
      <h3>Desparasitaciones</h3>
      <ul>
        <li>Ivermectina: 20/05/2024</li>
      </ul>
    </div>
  );
};

export default Salud;
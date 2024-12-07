import Link from 'next/link';

const menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/reproduccion">Reproducción</Link>
        </li>
        <li>
          <Link href="/produccionDeLeche">Producción de Leche</Link>
        </li>
        <li>
          <Link href="/inventario">Inventario</Link>
        </li>
        <li>
          <Link href="/salud">Salud</Link>
        </li>
        <li>
          <Link href="/alimentacion">alimentacion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default menu;
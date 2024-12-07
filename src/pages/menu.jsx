import Link from 'next/link';
import Image from "next/image";

const menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/reproduccion">
          <Image
          className="dark:invert"
          src="/reproduccion.png"
          alt="reproduccion"
          width={100}
          height={100}
          priority
        />
          </Link>


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
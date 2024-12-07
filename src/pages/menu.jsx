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
          <Link href="/produccionDeLeche">
          <Image
          className="dark:invert"
          src="/produccion.png"
          alt="reproduccion"
          width={100}
          height={100}
          priority
        />
          
          
          </Link>
        </li>
        <li>
          <Link href="/inventario">
          <Image
          className="dark:invert"
          src="/inventario.png"
          alt="reproduccion"
          width={100}
          height={100}
          priority
        />
          
          </Link>
        </li>
        <li>
          <Link href="/salud">
          <Image
          className="dark:invert"
          src="/salud.png"
          alt="reproduccion"
          width={100}
          height={100}
          priority
        />
          
          
          </Link>
        </li>
        <li>
          <Link href="/alimentacion">
          
          <Image
          className="dark:invert"
          src="/alimentacion.png"
          alt="reproduccion"
          width={100}
          height={100}
          priority
        />
          
          
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default menu;
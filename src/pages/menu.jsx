import Link from 'next/link';
import Image from "next/image";

const Menu = () => {
  return (
    <nav>
      <ul>
        <ol>
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
        </ol>
        <ol>
          <Link href="/produccionDeLeche">
            <Image
              className="dark:invert"
              src="/produccion.png"
              alt="produccion de leche"
              width={100}
              height={100}
              priority
            />
          </Link>
        </ol>
        <ol>
          <Link href="/inventario">
            <Image
              className="dark:invert"
              src="/inventario.png"
              alt="inventario"
              width={100}
              height={100}
              priority
            />
          </Link>
        </ol>
        <ol>
          <Link href="/salud">
            <Image
              className="dark:invert"
              src="/salud.png"
              alt="salud"
              width={100}
              height={100}
              priority
            />
          </Link>
        </ol>
        <ol>
          <Link href="/alimentacion">
            <Image
              className="dark:invert"
              src="/alimentacion.png"
              alt="alimentacion"
              width={100}
              height={100}
              priority
            />
          </Link>
        </ol>
      </ul>
    </nav>
  );
};

export default Menu;
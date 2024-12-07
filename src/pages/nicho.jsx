
import Link from 'next/link';

const nicho = () => {
  return (
    <div>
      <h1>Estación Agropecuaria UTPL funciona con pages</h1>
      <Link href="/leche">
        <button
          className="rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg sm:text-xl px-8 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Ingresar a sesión
        </button>
      </Link>
    </div>
  );
};

export default nicho;
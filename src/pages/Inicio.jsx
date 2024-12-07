import Link from "next/link";

const inicio = () => {
  return (
    <>
      <div><h1>Estacion Agropecuaria UTPL</h1></div>
      <Link href=".produccion_leche/ingreso_animal">Ir a mi Ingreso_animal</Link>

      <Link href="ingreso_animal">Ir a mi 3</Link>
    </>
  );
};

export default inicio;
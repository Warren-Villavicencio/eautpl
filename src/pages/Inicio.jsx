import Link from "next/link";

const inicio = () => {
  return (
    <>
      <div><h1>Estacion Agropecuaria UTPL</h1></div>
      <Link href="produccion_leche/Ingreso_animal">Ir a mi Ingreso_animal</Link>
    </>
  );
};

export default inicio;
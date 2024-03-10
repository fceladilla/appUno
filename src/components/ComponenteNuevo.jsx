import style from "../assets/style/ComponenteNuevo.module.css";
import ComponenteHijo from "./ComponenteHijo";
function ComponenteNuevo() {
  return (
    <>
      <h1 style={{ borderBottom: "solid 5px black" }} className={style.fondo}>
        Holis
      </h1>
      <ComponenteHijo></ComponenteHijo>
    </>
  );
}

export default ComponenteNuevo;

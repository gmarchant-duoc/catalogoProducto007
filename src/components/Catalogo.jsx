import productos from "../data/productos.json";
import Producto from "./Producto";
import "./Catalogo.css";

export default function Catalogo(){
    return(
        <section className="catalogo">
            {productos.map((producto)=>(
                <Producto key={producto.id} {...producto} />
            ))}
        </section>
    );
}
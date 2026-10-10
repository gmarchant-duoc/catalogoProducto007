import "./Producto.css";

export default function Producto ({id, nombre, imagen, precio}){
    return(
        <article className="card producto-card">
            <div className="producto-imagen-contenedor">
                <img
                    src={imagen}
                    alt={nombre}
                    className="producto-imagen"
                />
            </div>
            <div className="card-body">
                <h2>{nombre}</h2>
                <p>
                    ${Number(precio).toLocaleString("es-CL")}  
                </p> 
                <button>Ver Producto</button>
            </div>
        </article>
    );
}
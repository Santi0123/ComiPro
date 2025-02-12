import React, { useState } from "react";
import { Trash2, X } from "lucide-react";
import "./ComidaList.css"; // Importa el CSS

const ComidaList = ({ comidas, deleteComida }) => {
    const [comidaSeleccionada, setComidaSeleccionada] = useState(null);

    return (
        <div className="comida-list-container">
            <div className="comida-grid">
                {comidas.map((comida) => (
                    <div key={comida.id} className="comida-card" onClick={() => setComidaSeleccionada(comida)}>
                        {comida.imagen && <img src={comida.imagen} alt={comida.nombre} className="comida-imagen" />}
                        <div className="comida-content">
                            <h3 className="comida-title">{comida.nombre}</h3>
                            <button
                                onClick={(e) => { e.stopPropagation(); deleteComida(comida.id); }}
                                className="delete-btn">
                                <Trash2 size={18} /> Borrar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {comidaSeleccionada && (
                <div className="modal-overlay active" onClick={() => setComidaSeleccionada(null)}>
                    <div className="modal-content modal-background" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setComidaSeleccionada(null)}>
                            <X size={24} />
                        </button>
                        <h2 className="modal-title">{comidaSeleccionada.nombre}</h2>
                        <p className="modal-category">{comidaSeleccionada.categoria}</p>
                        <p className="modal-recipe">{comidaSeleccionada.receta}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComidaList;

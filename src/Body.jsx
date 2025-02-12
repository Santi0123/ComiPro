import { useEffect, useState } from 'react';
import ComidaList from './ComidaList.jsx';
import './Body.css';
import Header from "./Header.jsx";

function Body() {
    const [comidas, setComidas] = useState([]);
    const [filtros, setFiltros] = useState({
        Postre: false,
        Entrante: false,
        Aperitivo: false,
        Principal: false,
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    // Obtener las comidas de la API
    useEffect(() => {
        const getComidas = async () => {
            try {
                const response = await fetch('http://localhost:3000/comida');
                if (!response.ok) throw new Error('Error al obtener los datos');
                const apiTComida = await response.json();
                setComidas(apiTComida);
            } catch (error) {
                console.error(error);
            }
        };
        getComidas();
    }, []);

    // Manejar eliminación de comida
    const deleteComida = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/comida/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setComidas((prevComidas) => prevComidas.filter((comida) => comida.id !== id));
                return true;
            }
        } catch (error) {
            console.error('Error al eliminar la comida:', error);
        }
        return false;
    };

    // Manejar cambios en los filtros
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFiltros((prevFiltros) => ({ ...prevFiltros, [name]: checked }));
    };

    // Mostrar u ocultar los filtros
    const handleAccordionClick = () => setIsAccordionOpen((prev) => !prev);

    // Filtrar comidas según los filtros seleccionados y el término de búsqueda
    const comidasFiltradas = comidas.filter((comida) => {
        const filtrosActivos = Object.values(filtros).some((value) => value);
        const matchesSearchQuery = comida.nombre.toLowerCase().includes(searchQuery.toLowerCase());
        return (!filtrosActivos || filtros[comida.categoria]) && matchesSearchQuery;
    });

    return (
        <div className="body-container">
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="filtros">
                <button onClick={handleAccordionClick} className="accordion">
                    {isAccordionOpen ? 'Ocultar Filtros' : 'Mostrar Filtros'}
                </button>
                {isAccordionOpen && (
                    <div className="panel">
                        {Object.keys(filtros).map((categoria) => (
                            <label key={categoria}>
                                <input
                                    type="checkbox"
                                    name={categoria}
                                    checked={filtros[categoria]}
                                    onChange={handleCheckboxChange}
                                />
                                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                            </label>
                        ))}
                    </div>
                )}
            </div>
            <div className="comida-list-container">
                <div className="comida-grid">
                    <ComidaList comidas={comidasFiltradas} deleteComida={deleteComida} />
                </div>
            </div>
        </div>
    );
}

export default Body;

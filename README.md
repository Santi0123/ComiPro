# ComiPro - Documentación v1.0

## Descripción
ComiPro es una herramienta web enfocada en la gestión y búsqueda de comidas. Permite a los usuarios filtrar, buscar y eliminar comidas de una lista obtenida a través de una API.

---

## Componentes Principales

### 1. `App.js`
Este componente es el punto de entrada de la herramienta. Se encarga de manejar el estado global del filtro y distribuirlo entre los componentes.

#### **Estado:**
- `filtro`: Estado que almacena el criterio de búsqueda.

#### **Estructura:**
- `<Header>`: Recibe y actualiza el estado de `filtro`.
- `<Body>`: Renderiza la lista de comidas filtradas.
- `<Footer>`: Muestra el pie de página.

---

### 2. `Body.js`
Este componente maneja la obtención y filtrado de las comidas.

#### **Estados:**
- `comidas`: Lista de comidas obtenida desde la API.
- `filtros`: Objeto con los filtros de categorías.
- `searchQuery`: Estado que almacena el término de búsqueda.
- `isAccordionOpen`: Controla la visibilidad del panel de filtros.

#### **Funciones:**
- `getComidas()`: Obtiene las comidas desde `http://localhost:3000/comida`.
- `deleteComida(id)`: Elimina una comida por su ID.
- `handleCheckboxChange(event)`: Maneja el cambio en los filtros.
- `handleAccordionClick()`: Alterna la visibilidad del panel de filtros.

#### **Estructura:**
- `<Header>`: Componente de cabecera.
- `<div className='filtros'>`: Contenedor de filtros desplegables.
- `<ComidaList>`: Renderiza la lista de comidas filtradas.

---

### 3. `ComidaList.js`
Muestra la lista de comidas y maneja la selección de una comida específica.

#### **Estados:**
- `comidaSeleccionada`: Almacena la comida seleccionada.

#### **Funciones:**
- `setComidaSeleccionada(comida)`: Permite visualizar detalles de una comida.

#### **Estructura:**
- `<div className='comida-list-container'>`: Contenedor principal.
- `<div className='comida-grid'>`: Muestra cada comida como una tarjeta interactiva.
- `<div className='modal-overlay'>`: Muestra los detalles de la comida seleccionada.

---

### 4. `Footer.js`
Muestra el pie de página con derechos de autor.

#### **Estructura:**
- `<Box>`: Contenedor del pie de página con estilos de Material UI.
- `<Typography>`: Muestra el texto de derechos reservados.

---

### 5. `Header.js`
Encargado de la barra de navegación y la funcionalidad de búsqueda.

#### **Estados:**
- `searchQuery`: Controla el input de búsqueda.

#### **Funciones:**
- `setSearchQuery(valor)`: Actualiza el estado de la búsqueda cuando el usuario ingresa texto.

#### **Estructura:**
- `<AppBar>`: Barra superior de navegación con estilos de Material UI.
- `<Typography>`: Título de la herramienta.
- `<Search>`: Campo de entrada para la búsqueda con icono de lupa.
- `<StyledInputBase>`: Campo de entrada estilizado para mejorar la experiencia del usuario.


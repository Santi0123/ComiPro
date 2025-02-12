import { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from "./Footer.jsx";
import "./App.css"

function App() {
    const [filtro, setFiltro] = useState('');

    return (
        <div>
            <Header filtro={filtro} setFiltro={setFiltro} />
            <Body filtro={filtro} />
            <Footer/>
        </div>
    );
}

export default App;

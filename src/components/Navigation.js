import React from 'react'
import '../css/Navigation.css'

function Navigation({ categorias }) {
    return (
        <div className="navigation">
            <h3>{categorias}</h3>
            {/* <h3>Electrónica, Audio y Video, Celulares y Teléfonos> Celulares y Smartphones >Apple> iPhone 11</h3> */}
        </div>
    )
}

export default Navigation

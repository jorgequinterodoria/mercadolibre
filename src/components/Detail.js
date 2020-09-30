import React from 'react'
import '../css/Detail.css'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'


function Detail() {
    const [{ selected }] = useStateValue()
    return (
        <div className="detail">

            <div className="detail__detalles">

                <img
                    src={selected.picture}
                    alt=""
                    className="detail__imagen"
                />
                <div className="detail__descripcion">
                    <h2>Descripción del producto</h2>
                    <p>{selected.description}</p>
                </div>
            </div>
            <div className="detail__info">
                <h4>{selected.condition} - {selected.sold_quantity} vendidos</h4>
                <h2>{selected.title}</h2>
                <CurrencyFormat
                    renderText={(precio) => (
                        <h3>{precio}</h3>
                    )}
                    decimalScale={2}
                    value={selected.precio}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={selected.currency}
                />
                <button>Comprar</button>
            </div>




        </div>
    )
}

export default Detail

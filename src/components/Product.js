import React from 'react'
import '../css/Product.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { useHistory } from 'react-router-dom'

function Product({ id, ciudad, title, price, currency, amount, decimals, picture, condition, free_shipping, sold_quantity, description }) {
    // eslint-disable-next-line
    const [{ }, dispatch] = useStateValue()
    const history = useHistory()


    const selectedProduct = () => {
        dispatch({
            type: actionTypes.SELECTED_PRODUCT,
            item: {
                id,
                title,
                price,
                currency,
                amount,
                decimals,
                picture,
                condition,
                free_shipping,
                sold_quantity,
                description
            }
        })
        history.push(`/id=${id}/description`)
    }

    return (
        <div className="product">
            <img
                onClick={selectedProduct}
                className="product__image"
                src={picture}
                alt=""
            />
            <div className="product__info">
                <div className="product__precio" onClick={selectedProduct}>

                    <CurrencyFormat
                        renderText={(precio) => (
                            <h3>{precio}</h3>
                        )}
                        decimalScale={2}
                        value={amount}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                    {free_shipping && <img
                        src="assets/ic_shipping.png"
                        alt=""
                    />}

                    <h5>{ciudad}</h5>
                </div>
                <div className="product__descripcion">
                    <p>{title}</p>
                    <p>Completo Unico</p>
                </div>

            </div>

        </div>
    )
}

export default Product

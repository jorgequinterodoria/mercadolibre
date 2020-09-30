import React, { useState, useEffect } from 'react'
import '../css/Results.css'
import Product from './Product'
import axios from '../axios'
import { useStateValue } from '../StateProvider'

function Results({ selectedQuery }) {
    const [products, setProducts] = useState([{}])
    const [{ query }] = useStateValue()
    let resultado = []

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(query)
            setProducts(request.data.results)
            return request
        }

        fetchData()
    }, [query])

    resultado = products.slice(0, 4)
    console.log(resultado)
    return (
        <div className="results">

            <div className="results__products">

                {/* <Product
                    id="1"
                    title="Celular iPhone 11 128gb Nuevo 100% Original Y Sellada"
                    currency="$"
                    amount={3449000}
                    decimals={0}
                    picture="https://http2.mlstatic.com/D_NQ_NP_930210-MCO40352959326_012020-V.webp"
                    condition="Nuevo"
                    free_shipping
                    ciudad="Montería"
                    sold_quantity={123}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                />
                <Product
                    id="2"
                    title="Celular iPhone 11 128gb Nuevo 100% Original Y Sellada"
                    currency="$"
                    amount={3449000}
                    decimals={0}
                    picture="https://http2.mlstatic.com/D_NQ_NP_686896-MCO41906861053_052020-V.jpg"
                    condition="Nuevo"
                    ciudad="Montería"
                    sold_quantity={123}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                />
                <Product
                    id="3"
                    imagen="https://http2.mlstatic.com/D_NQ_NP_741860-MCO32348231643_092019-V.jpg"
                    title="Celular iPhone 11 128gb Nuevo 100% Original Y Sellada"
                    currency="$"
                    amount={3449000}
                    decimals={0}
                    picture="https://http2.mlstatic.com/D_NQ_NP_741860-MCO32348231643_092019-V.jpg"
                    condition="Nuevo"
                    free_shipping
                    ciudad="Montería"
                    sold_quantity={123}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <Product
                    id="4"
                    title="Celular iPhone 11 128gb Nuevo 100% Original Y Sellada"
                    currency="$"
                    amount={3449000}
                    decimals={0}
                    picture="https://http2.mlstatic.com/D_NQ_NP_760359-MCO43184765874_082020-V.jpg"
                    condition="Nuevo"
                    ciudad="Montería"
                    sold_quantity={123}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                /> */}

                {resultado.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        currency={product.currency_id}
                        amount={product.price}
                        decimals={0}
                        picture={product.thumbnail}
                        condition={product.condition}
                        free_shipping={product.free_shipping}
                        ciudad={product.city_name}
                        sold_quantity={product.sold_quantity}
                        description={product.description}
                    />
                ))}
            </div>
        </div>

    )
}

export default Results

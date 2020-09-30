import React, { useState } from 'react'
import '../css/Search.css'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Search() {
    const [selectedQuery, setSelectedQuery] = useState()
    // eslint-disable-next-line
    const [{ }, dispatch] = useStateValue()
    const history = useHistory()

    const handleQuery = (e) => {
        e.preventDefault()
        dispatch({
            type: actionTypes.SELECTED_QUERY,
            query: selectedQuery
        })
        history.push(`/search/${selectedQuery}`)

    }
    return (
        <div className="search">
            <img
                className="search__logo"
                src="assets/Logo_ML.png"
                alt="Mercado Libre"
            />
            <input
                className="search__input"
                placeholder="Nunca dejes de buscar"
                value={selectedQuery}
                onChange={(e) => setSelectedQuery(e.target.value)}
            />
            <img
                className="search__find"
                src="assets/ic_Search.png"
                alt=""
                onClick={handleQuery}
            />
        </div>
    )
}

export default Search

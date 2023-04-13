import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaComentario from './ListaComentario'

const App = () => {
    return (
        <ListaComentario></ListaComentario>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
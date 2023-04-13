import React from 'react'
import Botoes from './Botoes'
import Comentario from './Comentario'

const Card = (props) => {
    return (
    <div className='card shadow m-5'>
        <Comentario foto={props.foto} username={props.username} text={props.text} data={props.data}></Comentario>
        <Botoes></Botoes>
    </div>
    )
}

export default Card
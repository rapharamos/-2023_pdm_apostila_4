import React from 'react'

const Comentario = (props) => {
    return (
        <div className='card-body'>
            <img className='float-start me-3 rounded' width={150} src={props.foto} alt="gorila" />
            <h1 className='card-title border-bottom p-2'>{props.username}</h1>
            <p className='card-text'>{props.text}</p>
            <div className='d-flex justify-content-end'>
                <p className='text-muted small mt-3'>{props.data}</p>
             </div>
    </div>
    )
}

export default Comentario
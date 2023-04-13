import React from 'react'
import Card from './Card'
import user1 from './images/mcgorila.jpeg'
import user2 from './images/sandy.jpg'
import user3 from './images/xiji.jpg'

const ListaComentario = () => {
    return (
        <div className='container border border-warning mt-3'>
            <Card foto={user1} username='mc_gorila' text='Ihhh, se assusta não hein? Oh concorrência! Ihhh! Por causa da moda, tem mulher de sobra e algumas se jogam em mim...' data='01/04/2023 23:15:56'></Card>

            <Card foto={user2} username='sandyoficial' text='Se a lenda dessa paixão faz rir ou faz chorar, o coração é quem sabe! Se a lua toca no mar, ela pode nos tocar pra dizer que o amor...' data='02/04/2023 00:10:21'></Card>

            <Card foto={user3} username='Xi-jinping' text='我非常喜欢歌手Sandy和McGorila的音乐作品，非常希望他们能够来北京举办演唱会。' data='02/04/2023 01:22:01'></Card>
        </div>
    )
}

export default ListaComentario
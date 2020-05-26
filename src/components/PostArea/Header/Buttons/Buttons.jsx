import React from 'react'

function Buttons() {
    return (
        <nav className='Nav'>
            <ul>
                <li>
                <a href=''>Home</a>
                </li>
                <li>
                <a href=''>Suporte</a>
                </li>
                <button className='btn btn-large btn-outline-light'>Adicionar post</button>
            </ul>
        </nav>
    )
}

export default Buttons
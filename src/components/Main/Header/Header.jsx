import React from 'react'

function Header() {
    return (
        <header className='Header'>
            <h1>Pernambook</h1>
            <ul>
                <li>
                <a href=''>Home</a>
                </li>
                <li>
                <a href=''>Suporte</a>
                </li>
                <button className='btn btn-large btn-outline-primary'>Adicionar post</button>
            </ul>
        </header>
    )
}

export default Header
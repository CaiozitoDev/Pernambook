import React from 'react'

import api from '../../../../../../services/API_CONFIG'

function Buttons() {
    function handleLogOut() {
        /* localStorage.removeItem('local_token') */
        api.get('/logoff').then(() => {
            window.location = '/'
        })
    }

    return (
        <nav className='Nav'>
            <p>Made with ❤ by CuscuzComCharque Productions</p>
            <ul>
                <li>
                    <a href='https://github.com/CaiozitoDev' target='_blank'>GitHub</a>
                </li>
                <li>
                    <a href='https://www.instagram.com/itsme_caio/?hl=pt-br' target='_blank'>Support</a>
                </li>
                <li>
                    <button className='btn btn-large btn-outline-light' onClick={handleLogOut}>
                        Logoff
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Buttons
import React from 'react'

function Buttons() {
    function handleLogOut() {
        /* localStorage.removeItem('local_token') */
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location = '/'
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
import React from 'react'

function Buttons() {
    return (
        <nav className='Nav'>
            <p>Made with ❤ by CuscuzComCharque Productions</p>
            <ul>
                <li>
                    <a href=''>About</a>
                </li>
                <li>
                    <a href=''>Support</a>
                </li>
                <button className='btn btn-large btn-outline-light'>
                    Logoff
                </button>
            </ul>
        </nav>
    )
}

export default Buttons
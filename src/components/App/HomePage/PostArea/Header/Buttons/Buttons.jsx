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
                <li>
                    <form action='/logoff' method='POST'>
                        <button className='btn btn-large btn-outline-light' value='exit'>
                            Logoff
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    )
}

export default Buttons
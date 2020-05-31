import React from 'react'

import {Close} from '@material-ui/icons'

function LeftMenuHeader() {
    return (
        <div className='LeftMenuHeader'>
            <h2>Menu</h2>
            <div className='LeftMenuCloseButton' onClick={() => {document.querySelector('.Left').classList.remove('isLeftClicked'); document.querySelector('.LeftMenu').classList.remove('isLeftMenuClicked')}}>
                <Close style={{fill: 'white'}} />
            </div>
        </div>
    )
}

export default LeftMenuHeader
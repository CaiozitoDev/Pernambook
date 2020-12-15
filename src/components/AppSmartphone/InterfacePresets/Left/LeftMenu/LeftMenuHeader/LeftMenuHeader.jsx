import React, {useContext} from 'react'

import {Close} from '@material-ui/icons'

import {SlideLeftMenuContext} from '../../../../../Contexts'

function LeftMenuHeader() {
    const {setSlideLeftMenu} = useContext(SlideLeftMenuContext)

    return (
        <div className='LeftMenuHeader'>
            <h2>Menu</h2>
            <div className='LeftMenuCloseButton' onClick={() => {
                /* document.querySelector('.Left').classList.remove('isLeftClicked'); document.querySelector('.LeftMenu').classList.remove('isLeftMenuClicked') */

                setSlideLeftMenu(false)
            }}>
                <Close style={{fill: 'white'}} />
            </div>
        </div>
    )
}

export default LeftMenuHeader
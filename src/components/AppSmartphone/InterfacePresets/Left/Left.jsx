import React, {useContext} from 'react'

import LeftMenu from './LeftMenu/LeftMenu'

import {Fade} from '@material-ui/core'

import {SlideLeftMenuContext} from '../../../Contexts'

function Left() {
    const {slideLeftMenu} = useContext(SlideLeftMenuContext)

    return (
        <>
            <Fade in={slideLeftMenu} timeout={500} mountOnEnter unmountOnExit><div className='Left'></div></Fade>
            <LeftMenu />
        </>
    )
}

export default Left
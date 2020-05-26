import React, {useState} from 'react'

import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom/'
import Fab from '@material-ui/core/Fab'

function NewPostForm() {
    const [textAreaClick, setTextAreaClick] = useState(false)

    return (
        <div className='NewPostForm'>
            <h1>Post area</h1>
            <form>
                <textarea placeholder="What's going on?" cols='50' rows={textAreaClick ? '6' : '2'} onClick={() => {
                    setTextAreaClick(true)
                }}></textarea>
                <Zoom in={textAreaClick}>
                    <Fab>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default NewPostForm
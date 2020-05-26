import React from 'react'

import AddIcon from '@material-ui/icons/Add';

function NewPostForm() {
    return (
        <div className='NewPostForm'>
            <h1>Post area</h1>
            <form>
                <textarea placeholder="What's going on?" cols='50' rows='2'></textarea>
                <button> <AddIcon /></button>
            </form>
        </div>
    )
}

export default NewPostForm
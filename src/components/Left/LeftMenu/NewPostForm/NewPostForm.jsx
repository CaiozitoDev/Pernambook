import React from 'react'

function NewPostForm() {
    return (
        <div className='NewPostForm'>
            <h1>Post area</h1>
            <form>
                <textarea placeholder="What's going on?" cols='50' rows='5'></textarea>
                <button className='btn btn-lg btn-success btn-block'>Send</button>
            </form>
        </div>
    )
}

export default NewPostForm
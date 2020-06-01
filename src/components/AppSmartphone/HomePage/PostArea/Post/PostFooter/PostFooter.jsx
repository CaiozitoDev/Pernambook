import React, {useState} from 'react'

// ICONS DO POST FOOTER
import {ThumbUp, Favorite, Comment, FavoriteBorder} from '@material-ui/icons'

function PostFooter() {
    const [iconClick, setIconClick] = useState({
        ThumbUp: false,
        FavoriteBorder: false,
        Comment: false
    })

    function handleIconClick(IconName, IconValue) {
        setIconClick(prevValue => {
            return {
                ...prevValue, [IconName]: !IconValue
            }
        }) 
    }

    return (
        <div className='PostFooter'>
            <form>
                <button onClick={() => handleIconClick('ThumbUp', iconClick.ThumbUp)} className='ThumbUpButton'>
                    <ThumbUp style={{fill: iconClick.ThumbUp ? 'cyan' : 'white'}} />
                </button>
                <button onClick={() => handleIconClick('FavoriteBorder', iconClick.FavoriteBorder)} className='FavoriteBorderButton'>
                    {iconClick.FavoriteBorder ? <Favorite color='secondary' /> : <FavoriteBorder style={{fill: 'red'}} />}
                </button>
                <button onClick={() => {handleIconClick('Comment', iconClick.Comment)}} className='CommentButton'>
                    <Comment style={{fill: iconClick.Comment ? 'orange' : 'white'}} />
                </button>
            </form>
        </div>
    )
}

export default PostFooter
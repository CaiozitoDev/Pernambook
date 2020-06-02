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
            <form action='/postbuttons' method='POST'>
                <button onClick={() => handleIconClick('ThumbUp', iconClick.ThumbUp)} className='ThumbUpButton' value='like'>
                    <ThumbUp style={{fill: iconClick.ThumbUp ? 'cyan' : null}} />
                </button>
                <button onClick={() => handleIconClick('FavoriteBorder', iconClick.FavoriteBorder)} className='FavoriteBorderButton' value='love'>
                    {iconClick.FavoriteBorder ? <Favorite color='secondary' /> : <FavoriteBorder />}
                </button>
                <button onClick={() => {handleIconClick('Comment', iconClick.Comment)}} className='CommentButton' value='comment'>
                    <Comment style={{fill: iconClick.Comment ? 'orange' : null}} />
                </button>
            </form>
        </div>
    )
}

export default PostFooter
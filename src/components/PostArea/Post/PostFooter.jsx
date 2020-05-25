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
                <label onClick={() => handleIconClick('ThumbUp',iconClick.ThumbUp)}>
                    <ThumbUp style={iconClick.ThumbUp ? {color: 'cyan'} : null} className='ThumbUpIcon'/>
                </label>
                <label onClick={() => handleIconClick('FavoriteBorder',iconClick.FavoriteBorder)}>
                    {iconClick.FavoriteBorder ? <Favorite color='secondary' /> : <FavoriteBorder color='secondary' className='FavoriteBorderIcon' />}
                </label>
                <label onClick={() => {handleIconClick('Comment',iconClick.Comment)}}>
                    <Comment style={iconClick.Comment ? {color: 'orange'} : null} className='CommentIcon'/>
                </label>
            </form>
        </div>
    )
}

export default PostFooter
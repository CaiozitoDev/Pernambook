import React, {useState} from 'react'

// ICONS DO POST FOOTER
import {ThumbUp, Favorite, Comment, FavoriteBorder} from '@material-ui/icons'

function PostFooter() {
    // FUNÇÃO E HOOK PRA TROCA DE ÍCONES E CORES DOS BOTÕES DO POST FOOTER
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
            <div className='LikeDiv'>
                <button onClick={() => handleIconClick('ThumbUp', iconClick.ThumbUp)} className='ThumbUpButton' name='postfooterbutton' value='like'>
                    <ThumbUp style={{fill: iconClick.ThumbUp ? 'cyan' : null}} />
                </button>
                <span className='LikeValue'>32</span>
            </div>
            <div className='LoveDiv'>
                <button onClick={() => handleIconClick('FavoriteBorder', iconClick.FavoriteBorder)} className='FavoriteBorderButton' name='postfooterbutton' value='love'>
                    {iconClick.FavoriteBorder ? <Favorite color='secondary' /> : <FavoriteBorder />}
                </button>
                <span className='LoveValue'>12</span>
            </div>
            <div className='CommentDiv'>
                <button onClick={() => {handleIconClick('Comment', iconClick.Comment)}} className='CommentButton' name='postfooterbutton' value='comment'>
                    <Comment style={{fill: iconClick.Comment ? 'orange' : null}} />
                </button>
                <span className='CommentValue'>23</span>
            </div>
        </div>
    )
}

export default PostFooter
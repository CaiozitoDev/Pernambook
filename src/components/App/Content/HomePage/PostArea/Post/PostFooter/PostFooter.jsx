import React, {useState, useEffect} from 'react'

// ICONS DO POST FOOTER
import {ThumbUp, Favorite, Comment, FavoriteBorder} from '@material-ui/icons'

import axios from 'axios'

function PostFooter(props) {
    // FUNÇÃO E HOOK PRA TROCA DE ÍCONES E CORES DOS BOTÕES DO POST FOOTER
    const [iconClick, setIconClick] = useState({
        ThumbUp: false,
        FavoriteBorder: false,
        Comment: false
    })

    const [iconValue, setIconValues] = useState({
        like: 0,
        love: 0,
        comment: 0
    })

    // VALORES INICIAIS DOS BOTÕES PASSSADOS PELO SERVER
    useEffect(() => {
        axios.post('/post-buttons', {postid: props.postid})
            .then(response => {
                setIconValues({
                    like: response.data.like,
                    love: response.data.love,
                    comment: response.data.comment
                })
            })
    })

    // ATUALIZA OS ICONES QUANDO CLICA
    function handleIconClick(IconClickName, IconClickValue) {
        setIconClick(prevValue => {
            return {
                ...prevValue, [IconClickName]: !IconClickValue
            }
        }) 
    }

    // INPUT PRO SERVER PARA INCREMENTAR OS VALORES NO BANCO DE DADOS QUANDO CLICA
    function handlePostValues(buttonValue, isButtonClicked) {
        axios.patch('/post-buttons', {buttonValue, postid: props.postid, isButtonClicked})
            .then(response => {
                console.log(response.data)
                axios.patch()
            })
            .catch(err => {console.log(err)})
    }

    return (
        <div className='PostFooter'>
            <div className='LikeDiv'>
                <button onClick={() => {
                    handleIconClick('ThumbUp', iconClick.ThumbUp)
                    handlePostValues('like', iconClick.ThumbUp)
                }} className='ThumbUpButton' name='postfooterbutton'>
                    <ThumbUp style={{fill: iconClick.ThumbUp ? 'cyan' : null}} />
                </button>
                <span className='LikeValue'>{iconValue.like}</span>
            </div>

            <div className='LoveDiv'>
                <button onClick={() => {
                    handleIconClick('FavoriteBorder', iconClick.FavoriteBorder)
                    handlePostValues('love', iconClick.FavoriteBorder)
                }} className='FavoriteBorderButton' name='postfooterbutton'>
                    {iconClick.FavoriteBorder ? <Favorite color='secondary' /> : <FavoriteBorder />}
                </button>
                <span className='LoveValue'>{iconValue.love}</span>
            </div>

            <div className='CommentDiv'>
                <button onClick={() => {
                    handleIconClick('Comment', iconClick.Comment)
                }} className='CommentButton' name='postfooterbutton'>
                    <Comment style={{fill: iconClick.Comment ? 'orange' : null}} />
                </button>
                <span className='CommentValue'>{iconValue.comment}</span>
            </div>
        </div>
    )
}

export default PostFooter
import React, {useState, useContext, useEffect} from 'react'
 
// ICONS DO POST FOOTER
import {ThumbUp, Favorite, Comment, FavoriteBorder} from '@material-ui/icons'

import api from '../../../../services/API_CONFIG'

import {PostContext, AuthContext} from '../../../Contexts'

import {Link} from 'react-router-dom'

import socket from '../../../../services/SOCKET_CONFIG'

function PostFooter() {
    const {_id} = useContext(PostContext)
    const {userData: {db_user_id}} = useContext(AuthContext)

    // FUNÇÃO E HOOK PRA TROCA DE ÍCONES E CORES DOS BOTÕES DO POST FOOTER
    const [reactions, setReactions] = useState({
        like: {
            value: 0,
            isClicked: false
        },
        love: {
            value: 0,
            isClicked: false
        },
        comments: 0,
        isCommentClicked: false
    })


    useEffect(() => {
        getPostData()

        socket.on(_id, () => {
            getPostData()
        })
    }, [])

    function getPostData() {
        // VALORES INICIAIS DOS BOTÕES PASSSADOS PELO SERVER
        api.get(`/post-buttons?postid=${_id}&db_user_id=${db_user_id}`)
            .then(response => {
                setReactions(preValue => {
                    return {
                        ...preValue,
                        like: response.data.like,
                        love: response.data.love,
                        comments: response.data.comments,
                    }
                })
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }

    const [isDisabled, setIsDisabled] = useState(false)

    const [iconClickQuery, setIconClickQuery] = useState(null)

    useEffect(() => {
        iconClickQuery &&
        handlePostValues(iconClickQuery.iconName)
    }, [reactions.like.isClicked, reactions.love.isClicked])

    // ATUALIZA OS ICONES QUANDO CLICA
    function handleIconClick(iconName) {
        setReactions(preValue => {
            const lastValue = preValue[iconName]

            return {
                ...preValue, 
                [iconName]: {
                    ...preValue[iconName],
                    isClicked: !lastValue.isClicked
                }
            }
        })

        setIconClickQuery({
            iconName
        })
    }

    // INPUT PRO SERVER PARA INCREMENTAR OS VALORES NO BANCO DE DADOS QUANDO CLICA
    function handlePostValues(iconName) {
        setIsDisabled(true)

        const isButtonClicked = reactions[iconName].isClicked

        api.patch('/post-buttons', {iconName, postid: _id, isButtonClicked, db_user_id})
            .then(() => {
                setIsDisabled(false)
            })
            .catch(err => {console.log(err)})
    }

    return (
        <div className='PostFooter'>
            <div className='LikeDiv' onClick={() => {
                handleIconClick('like')
            }}>
                <button className='ThumbUpButton' name='postfooterbutton' disabled={isDisabled}>
                    <ThumbUp style={{fill: reactions.like.isClicked ? 'cyan' : null}} />
                </button>
                <span className='LikeValue'>{reactions.like.value}</span>
            </div>

            <div className='LoveDiv' onClick={() => {
                handleIconClick('love')
            }}>
                <button className='FavoriteBorderButton' name='postfooterbutton'>
                    {reactions.love.isClicked ? <Favorite color='secondary' /> : <FavoriteBorder />}
                </button>
                <span className='LoveValue'>{reactions.love.value}</span>
            </div>

            <div className='CommentDiv'>
                <Link to={`/comments/${_id}`} >
                    <button className='CommentButton' name='postfooterbutton'>
                        <Comment style={{fill: reactions.isCommentClicked && 'orange'}} />
                    </button>
                </Link>
                <span className='CommentValue'>{reactions.comments}</span>
            </div>
        </div>
    )
}

export default PostFooter
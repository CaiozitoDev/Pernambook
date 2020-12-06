import React, {useState, useContext, useEffect} from 'react'

// ICONS DO POST FOOTER
import {ThumbUp, Favorite, Comment, FavoriteBorder} from '@material-ui/icons'

import api from '../../../../services/API_CONFIG'

import {PostContext, AuthContext} from '../../../Contexts'

import {Link} from 'react-router-dom'

function PostFooter() {
    const {_id} = useContext(PostContext)
    const {userData: {db_user_id}} = useContext(AuthContext)

    // FUNÇÃO E HOOK PRA TROCA DE ÍCONES E CORES DOS BOTÕES DO POST FOOTER
    const [reactions, setReactions] = useState({
        like: 0,
        love: 0,
        comment: 0,
        isLikeClicked: false,
        isLoveClicked: false,
        isCommentClicked: false
    })

    const [isDisabled, setIsDisabled] = useState(false)

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    const [iconClickQuery, setIconClickQuery] = useState(null)

    useEffect(() => {
        iconClickQuery &&
        handlePostValues(iconClickQuery.isIconClicked, iconClickQuery.iconName)
    }, [reactions.isLikeClicked, reactions.isLoveClicked])

    // VALORES INICIAIS DOS BOTÕES PASSSADOS PELO SERVER
    if(isRequestFinished) {
        setIsRequestFinished(false)
        api.get(`/post-buttons?postid=${_id}&db_user_id=${db_user_id}`)
            .then(response => {
                setReactions({
                    like: response.data.like,
                    love: response.data.love,
                    comment: response.data.comment,
                    isLikeClicked: response.data.isLikeClicked,
                    isLoveClicked: response.data.isLoveClicked
                })
                setIsRequestFinished(true)
            })
            .catch(err => {
                console.log(err.response.data.message)
                setReactions({
                    like: 0,
                    love: 0,
                    comment: 0,
                    isLikeClicked: false,
                    isLoveClicked: false
                })
            })
    }

    // ATUALIZA OS ICONES QUANDO CLICA
    function handleIconClick(isIconClicked, iconName) {
        setIconClickQuery({
            isIconClicked,
            iconName
        })

        setReactions(preValue => {
            const lastValue = preValue[isIconClicked]
            return {
                ...preValue, [isIconClicked]: !lastValue
            }
        })
    }

    // INPUT PRO SERVER PARA INCREMENTAR OS VALORES NO BANCO DE DADOS QUANDO CLICA
    function handlePostValues(isIconClicked, iconName) {
        setIsDisabled(true)
        const isButtonClicked = reactions[isIconClicked]

        api.patch('/post-buttons', {iconName, postid: _id, isButtonClicked, db_user_id})
            .then(response => {
                console.log(response.data)
                setIsDisabled(false)
            })
            .catch(err => {console.log(err)})
    }

    return (
        <div className='PostFooter'>
            <div className='LikeDiv' onClick={() => {
                handleIconClick('isLikeClicked', 'like')
            }}>
                <button className='ThumbUpButton' name='postfooterbutton' disabled={isDisabled}>
                    <ThumbUp style={{fill: reactions.isLikeClicked ? 'cyan' : null}} />
                </button>
                <span className='LikeValue'>{reactions.like}</span>
            </div>

            <div className='LoveDiv' onClick={() => {
                handleIconClick('isLoveClicked', 'love')
            }}>
                <button className='FavoriteBorderButton' name='postfooterbutton'>
                    {reactions.isLoveClicked ? <Favorite color='secondary' /> : <FavoriteBorder />}
                </button>
                <span className='LoveValue'>{reactions.love}</span>
            </div>

            <div className='CommentDiv'>
                <Link to={`/comments/${_id}`} >
                    <button className='CommentButton' name='postfooterbutton'>
                        <Comment style={{fill: reactions.isCommentClicked && 'orange'}} />
                    </button>
                </Link>
                <span className='CommentValue'>{reactions.comment}</span>
            </div>
        </div>
    )
}

export default PostFooter
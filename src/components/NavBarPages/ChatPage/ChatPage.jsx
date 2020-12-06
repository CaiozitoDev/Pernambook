import React, {useState, useContext} from 'react'

import {SearchMenuPreset, LeftPreset, DownPreset} from '../../AppSmartphone/InterfacePresets/InterfacePresets'
import DesktopInterfacePresets from '../../App/InterfacePresets/InterfacePresets'

import ChatMessage from './ChatMessage/ChatMessage'

import {Zoom} from '@material-ui/core'
import {KeyboardBackspace} from '@material-ui/icons'

import {useParams} from 'react-router-dom'

import api from '../../../services/API_CONFIG'

import {Link} from 'react-router-dom'

import {ChatContext, AuthContext} from '../../Contexts'

function ChatPage(props) {
    const {userData: {db_user_id}} = useContext(AuthContext)

    const {chatid} = useParams()

    const [chatData, setChatData] = useState({
        myProfile: {
            userPhoto: '',
            username: '',
            userid: ''
        },
        friendProfile: {
            userPhoto: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
            username: '',
            userid: ''
        },
        messages: []
    })

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    if(isRequestFinished) {
        setIsRequestFinished(false)
        api.get(`/chat/${chatid}`).then(response => {
            if(response.data.found) {
                setChatData({
                    myProfile: db_user_id == response.data.doc.members[0].userid ? response.data.doc.members[0] : response.data.doc.members[1],
                    friendProfile: db_user_id !== response.data.doc.members[0].userid ? response.data.doc.members[0] : response.data.doc.members[1],
                    messages: response.data.doc.messages
                })
            } else {
                setChatData(preValue => {
                    return {
                        ...preValue,
                        friendProfile: {
                            userPhoto: 'https://image.flaticon.com/icons/png/512/718/718672.png',
                            username: 'Chat not found',
                            userid: ''
                        } 
                    }
                })
            }

            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    let ChatContextData = ({children}) => {
        return (
            <ChatContext.Provider value={{isChat: true, chatId: chatid, chatData: {myProfile: chatData.myProfile, friendProfile: chatData.friendProfile}}}>
                {children}
            </ChatContext.Provider> 
        )
    }

    return (
        <div className='ChatPage' onLoad={() => {window.scrollTo(0,document.body.scrollHeight)}}> {/* PAGE INICIA JÁ NA PARTE DE BAIXO */}
            {props.device == 'desktop' ? 
                <ChatContextData>
                    <DesktopInterfacePresets />
                </ChatContextData> : 
                <div>
                    <SearchMenuPreset title='Chat' />
                    <LeftPreset />
                    <ChatContextData><DownPreset /></ChatContextData>
                </div>
            }

            <div className={`${props.device == 'desktop' && 'col-8'} ChatContent`}>
                <Zoom in={true} timeout={1000}>
                    <div className='ChatHeader'>
                        <Link to='/messages'><KeyboardBackspace /></Link>
                        <div className='ChatHeaderInfo'>
                            <Link to={`/profile/${chatData.friendProfile.username}`}>
                                <img src={chatData.friendProfile.userPhoto} className='PostUserIcon' />
                                <h4>{chatData.friendProfile.username}</h4>
                            </Link>
                        </div>
                    </div>
                </Zoom>

                <div className='ChatMessages'>
                    {chatData.messages.map(message => {
                        if(message.userid == db_user_id) {
                            return <ChatMessage data={message} myMessage={true} photo={chatData.myProfile.userPhoto} />
                        } else {
                            return <ChatMessage data={message} myMessage={false} photo={chatData.friendProfile.userPhoto} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChatPage
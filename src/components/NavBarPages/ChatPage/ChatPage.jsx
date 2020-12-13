import React, {useState, useContext, useEffect} from 'react'

import {SearchMenuPreset, LeftPreset, DownPreset} from '../../AppSmartphone/InterfacePresets/InterfacePresets'
import DesktopInterfacePresets from '../../App/InterfacePresets/InterfacePresets'

import ChatMessage from './ChatMessage/ChatMessage'

import {Zoom} from '@material-ui/core'
import {KeyboardBackspace} from '@material-ui/icons'

import {useParams} from 'react-router-dom'

import api from '../../../services/API_CONFIG'

import {Link} from 'react-router-dom'

import {ChatContext, AuthContext} from '../../Contexts'

import socket from '../../../services/SOCKET_CONFIG'

let ChatContextData = ({children, params}) => {
    return (
        <ChatContext.Provider value={params}>
            {children}
        </ChatContext.Provider> 
    )
}

function ChatPage(props) {
    const {userData: {db_user_id}} = useContext(AuthContext)

    const {chatId} = useParams()

    const [chatData, setChatData] = useState({
        myProfile: {
            photo: '',
            username: '',
            userId: ''
        },
        friendProfile: {
            photo: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
            username: '',
            userId: ''
        }
    })

    const [messages, setMessages] = useState([])

    useEffect(() => {
        getChatData(true)

        socket.on(`${chatId}_newmessage`, () => {
            getChatData()
        })
    }, [])

    function getChatData(firstFetch) {
        api.get(`/chat/${chatId}`).then(response => {
            if(firstFetch) {
                setChatData({
                    myProfile: db_user_id == response.data.chatData.members[0].userId ? response.data.chatData.members[0] : response.data.chatData.members[1],
                    friendProfile: db_user_id !== response.data.chatData.members[0].userId ? response.data.chatData.members[0] : response.data.chatData.members[1]
                })
            }

            setMessages(response.data.chatData.messages)

            let scrollTop = document.body.scrollTop

            let scrollTopMax = 
            document.body.scrollHeight -
            document.body.offsetHeight

            let autoScroll = scrollTop >= scrollTopMax

            autoScroll && window.scrollTo(0,document.body.scrollHeight)
        })
        .catch(err => {
            console.log(err)
        
            setChatData(preValue => {
                return {
                    ...preValue,
                    friendProfile: {
                        photo: 'https://image.flaticon.com/icons/png/512/718/718672.png',
                        username: 'Chat not found',
                        userId: ''
                    } 
                }
            })
        })
    }

    const params = {isChat: true, chatId: chatId, chatData: {myProfile: chatData.myProfile, friendProfile: chatData.friendProfile}}

    return (
        <div className='ChatPage' > {/* PAGE INICIA JÁ NA PARTE DE BAIXO */}
            {props.device == 'desktop' ? 
                <ChatContextData params={params}>
                    <DesktopInterfacePresets />
                </ChatContextData> : 
                <>
                    <SearchMenuPreset title='Chat' />
                    <LeftPreset />
                    <ChatContextData params={params}>
                        <DownPreset />
                    </ChatContextData>
                </>
            }

            <div className={`${props.device == 'desktop' && 'col-8'} ChatContent`}>
                <Zoom in timeout={1000}>
                    <div className='ChatHeader'>
                        <Link to='/messages'><KeyboardBackspace /></Link>
                        <div className='ChatHeaderInfo'>
                            <Link to={`/profile/${chatData.friendProfile.userId}`}>
                                <img src={chatData.friendProfile.photo} className='PostUserIcon' />
                                <h4>{chatData.friendProfile.username}</h4>
                            </Link>
                        </div>
                    </div>
                </Zoom>

                <div className='ChatMessages'>
                    {messages.map(message => {
                        if(message.userId == db_user_id) {
                            return <ChatMessage data={message} myMessage photo={chatData.myProfile.photo} />
                        } else {
                            return <ChatMessage data={message} myMessage={false} photo={chatData.friendProfile.photo} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChatPage
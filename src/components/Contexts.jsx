import React, {createContext} from 'react'

const AuthContext = createContext({})
const ChatContext = createContext({})
const PostContext = createContext({})
const SlideLeftMenuContext = createContext({})

export {
    AuthContext,
    ChatContext,
    PostContext,
    SlideLeftMenuContext
}
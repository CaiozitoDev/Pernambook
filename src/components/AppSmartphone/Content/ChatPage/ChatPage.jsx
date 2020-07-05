import React from 'react'

import {SearchMenuPreset, LeftPreset} from '../../InterfacePresets/InterfacePresets'

import {Zoom, Fab} from '@material-ui/core'
import {Send, KeyboardBackspace} from '@material-ui/icons'

function ChatPage() {
    return (
        <div className='ChatPage'>
            <SearchMenuPreset title='Chat' />
            <LeftPreset />

            <div className='ChatContent'>
                    <div className='ChatHeader'>
                        <a href='/messages'><KeyboardBackspace /></a>
                        <div className='ChatHeaderInfo'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon' />
                            <h4>Os Cornos</h4>
                        </div>
                    </div>

                    <div className='ChatMessages'>
                        <div className='ChatMessage OtherMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfn</p>
                        </div>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfn</p>
                        </div>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfdfbiasbdfiasbdfbasdifbisadbfiabsdfibasdifiasbdfiasbdfiasbdfibasdifbaisdbfiasdbfiasbdfiasdbfiasbfasubdfiasdufaidbfaisdfbisadbfaisdbfiasdbfn</p>
                        </div>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfdfbiasbdfiasbdfbasdifbisadbfiabsdfibasdifiasbdfiasbdfiasbdfibasdifbaisdbfiasdbfiasbdfiasdbfiasbfasubdfiasdufaidbfaisdfbisadbfaisdbfiasdbfn</p>
                        </div>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfdfbiasbdfiasbdfbasdifbisadbfiabsdfibasdifiasbdfiasbdfiasbdfibasdifbaisdbfiasdbfiasbdfiasdbfiasbfasubdfiasdufaidbfaisdfbisadbfaisdbfiasdbfn</p>
                        </div>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfdfbiasbdfiasbdfbasdifbisadbfiabsdfibasdifiasbdfiasbdfiasbdfibasdifbaisdbfiasdbfiasbdfiasdbfiasbfasubdfiasdufaidbfaisdfbisadbfaisdbfiasdbfn</p>
                        </div>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfdfbiasbdfiasbdfbasdifbisadbfiabsdfibasdifiasbdfiasbdfiasbdfibasdifbaisdbfiasdbfiasbdfiasdbfiasbfasubdfiasdufaidbfaisdfbisadbfaisdbfiasdbfn</p>
                        </div>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfdfbiasbdfiasbdfbasdifbisadbfiabsdfibasdifiasbdfiasbdfiasbdfibasdifbaisdbfiasdbfiasbdfiasdbfiasbfasubdfiasdufaidbfaisdfbisadbfaisdbfiasdbfn</p>
                        </div>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfdfbiasbdfiasbdfbasdifbisadbfiabsdfibasdifiasbdfiasbdfiasbdfibasdifbaisdbfiasdbfiasbdfiasdbfiasbfasubdfiasdufaidbfaisdfbisadbfaisdbfiasdbfn</p>
                        </div>

                    <div className='NewChatForm'>
                        <textarea placeholder='Send a message'></textarea>
                        <Fab>
                            <Send />
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
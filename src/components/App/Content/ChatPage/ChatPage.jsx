import React from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import {Zoom} from '@material-ui/core'
import {KeyboardBackspace} from '@material-ui/icons'

function ChatPage() {
    return (
        <div className='ChatPage'>
            <InterfacePresets isChat={true} />

            <div className='col-8 ChatContent'>
                <Zoom in={true} timeout={1000}>
                    <div className='ChatHeader'>
                        <a href='/messages'><KeyboardBackspace /></a>
                        <div className='ChatHeaderInfo'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon' />
                            <h4>Os Cornos</h4>
                        </div>
                    </div>
                </Zoom>

                <div className='ChatMessages'>
                    <Zoom in={true} timeout={1000}>
                        <div className='ChatMessage OtherMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfn</p>
                        </div>
                    </Zoom>
                    <Zoom in={true} timeout={1000}>
                        <div className='ChatMessage OtherMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfn</p>
                        </div>
                    </Zoom>
                    <Zoom in={true} timeout={1000}>
                        <div className='ChatMessage MyMessage'>
                            <img src='https://pbs.twimg.com/media/EcHLzwlUEAAf4dY?format=jpg&name=900x900' className='PostUserIcon'/>
                            <p>dosfnoasdnfoasndfoasnfdnasodfnoasdifaiosdfiasfiasfiasdfasofaspodfiaosifaisjdpfoasijfijasdfpjsfijopisjdfpoasfjopsjpoijspoijopjojasdfbasfbiasdbfiasbdfisfbasidfbaisfdbaisbfdaisbdfausbdfasidfuabfpiasdbfaisdfbasibfaisfbiasbdfib</p>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
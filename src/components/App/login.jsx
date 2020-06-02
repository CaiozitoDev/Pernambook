import React, {useState} from 'react'

import {Person, Lock} from '@material-ui/icons'

import Brand from './InterfacePresets/Left/Brand/Brand'

import Zoom from '@material-ui/core/Zoom'

function Login(props) {
    // FUNÇÃO E HOOK PRA DEFINIR PRA QUAL ROTA O FORM VAI MANDAR OS DADOS DEPENDENDO SE A PAG É DE LOGIN OU REGISTRO
    const [isLoginPage, setIsLoginPage] = useState(false)

    function handleIsLoginPage() {
        if(window.location.pathname === '/login') {
            setIsLoginPage(() => {
                console.log(true)
                return true
            })
        }
    }

    return (
        <div className='LoginPage' onLoad={handleIsLoginPage}>
            <Zoom in='true' timeout={1000} >
                <div className='LoginMenu'>
                    <Brand />
                    <form action={isLoginPage ? '/logindata' : '/registerdata'} method='POST'>
                        <h1>{props.title}</h1>
                        <div className='UsernameField'>
                            <Person />
                            <input type='text' placeholder='Username' name='username' />
                        </div>
                        <div className='PasswordField'>
                            <Lock />
                            <input type='password' placeholder='Password' name='password'/>
                        </div>
                        <button className='btn btn-lg btn-outline-danger' type='submit'>{props.title}</button>
    
                        <button className='GoogleField btn btn-lg btn-primary'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="svg-inline--fa fa-google fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> 
                            <h4>{props.title} with Google</h4>
                        </button>
                    </form>
                </div>
            </Zoom>
        </div>
    )
}

export default Login
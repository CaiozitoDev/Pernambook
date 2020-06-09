import React, {useState} from 'react'

import {Person, Lock} from '@material-ui/icons'

import Brand from '../InterfacePresets/Left/Brand/Brand'

import Zoom from '@material-ui/core/Zoom'

import axios from 'axios'

function LoginRegisterPage(props) {
    // FUNÇÃO E HOOK PRA DEFINIR PRA QUAL ROTA O FORM VAI MANDAR OS DADOS DEPENDENDO SE A PAG É DE LOGIN OU REGISTRO
    const [isLoginPage, setIsLoginPage] = useState('/registerdata')

    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    })

    const [title, setTitle] = useState(props.title)


    // MUDA A ROTA DO POST (FETCH) DEPENDENDO DA URL ATUAL DA PAGINA
    function handleIsLoginPage() {
        if(window.location.pathname === '/login') {
            setIsLoginPage(() => {
                return '/logindata'
            })
        }
    }

    // ATUALIZA AUTOMATICAMENTE OS VALUES DOS INPUTS
    function handleInputValues(event) {
        const {name, value} = event.target
        setInputValues(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    // FUNÇÃO QUE REDIRECIONA PARA A HOME QUANDO O USUÁRIO É LOGADO/REGISTRADO
    function handlePostLoginRegisterData() {
        setTitle('Loading...')

        if(inputValues.username.length < 4 || inputValues.password.length < 4) {
            setTitle('Min length: 4 characters')
        } else if(inputValues.username.search(' ') !== -1 || inputValues.password.search(' ') !== -1) {
            setTitle('Spaces are not allowed')
        } else {
            axios.post(isLoginPage, inputValues).then(response => {
                console.log(isLoginPage)
                if(response.data.redirect) { 
                    localStorage.setItem('local_token', response.data.token)           
                    window.location = '/home'
                } else {
                    setTitle(response.data.message)
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    // FUNÇÃO QUE CUIDA DA AUTENTICAÇÃO PELA API DO GOOGLE (EM PRODUÇÃO AINDA)
    function handleGoogleLoginRegisterData() {
        setTitle('Loading...')

        axios.get('/google').then(response => {
            console.log('foi emmm')
        })
    }

    return (
        <div className='LoginPage' onLoad={handleIsLoginPage}>
            <Zoom in='true' timeout={1000} >
                <div className='LoginMenu'>
                    <Brand />
                    <div className='LoginRegisterData'>
                        <h1>{title}</h1>
                        <form no onSubmit={(e) => {e.preventDefault()}}>
                            <div className='UsernameField'>
                                <Person />
                                <input type='text' placeholder='Username' name='username' onChange={handleInputValues} value={inputValues.username} />
                            </div>
                            <div className='PasswordField'>
                                <Lock />
                                <input type='password' placeholder='Password' name='password' onChange={handleInputValues} value={inputValues.password} />
                            </div>
                            <button className='btn btn-lg btn-block btn-outline-danger' onClick={handlePostLoginRegisterData}>{props.title}</button>
                        </form>
                        <a href='http://localhost:5000/google' onClick={handleGoogleLoginRegisterData} className='GoogleField'>
                            <button className='btn btn-lg btn-primary'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="svg-inline--fa fa-google fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> 
                                <h4>{props.title} with Google</h4>
                            </button>
                        </a>
                        {window.location.pathname == '/login' ?
                            <a href='/register' className='SwitchPageButton'>
                                <button className='btn btn-sm btn-warning'>Not registered? Register here</button>
                            </a>
                            :
                            <a href='/login' className='SwitchPageButton'>
                                <button className='btn btn-sm btn-warning'>Already have an account? Log here</button>
                            </a>
                        }
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default LoginRegisterPage
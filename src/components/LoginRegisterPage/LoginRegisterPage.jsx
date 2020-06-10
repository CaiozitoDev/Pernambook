import React, {useState} from 'react'

import {Person, Lock, Facebook} from '@material-ui/icons'

import Brand from '../App/InterfacePresets/Left/Brand/Brand'

import Zoom from '@material-ui/core/Zoom'

import axios from 'axios'

import FacebookLogin from 'react-facebook-login'

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
       } else if(inputValues.password.search(' ') !== -1) {
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

   // FUNÇÃO QUE CUIDA DA AUTENTICAÇÃO PELA API DO FACEBOOK
   function handleFacebookLoginRegisterData({name, userID, picture: {data: {url}}}) {
       setTitle('Loading...')

       axios.post('/facebook', {name, userID, url})
           .then(response => {
               if(response.data.redirect) {
                   localStorage.setItem('local_token', response.data.token)
                   window.location = '/home'
               } else {
                   console.log(response.data)
               }
           })
           .catch(err => {
               console.log(err)
           })
   }




    return (
        <div className='LoginPage' onLoad={handleIsLoginPage}>
            <Zoom in='true' timeout={1000} >
                <div className='LoginMenu'>
                    <Brand />
                    <div className='LoginRegisterData'>
                        <h1>{title}</h1>
                        <form onSubmit={(e) => {e.preventDefault()}}>
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
                        <div className='FacebookField'>
                            <FacebookLogin
                                appId="2592642841005355"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={handleFacebookLoginRegisterData}
                                cssClass='btn btn-lg btn-primary w-100'
                                icon={<Facebook />}
                                textButton={window.location.pathname == '/login' ? 'Login with Facebook' : 'Register with Facebook'}
                            />
                        </div>
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
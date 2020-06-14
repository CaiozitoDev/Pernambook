import React, {useState} from 'react'

import {Person, Lock, Facebook} from '@material-ui/icons'

import Brand from '../App/InterfacePresets/Left/Brand/Brand'

import Zoom from '@material-ui/core/Zoom'

import FacebookLogin from 'react-facebook-login'

import imgCompression from 'browser-image-compression'

import AxiosLoginRegisterSchema from '../functions/AxiosLoginRegisterSchema'
 
function LoginRegisterPage(props) {
   // FUNÇÃO E HOOK PRA DEFINIR PRA QUAL ROTA O FORM VAI MANDAR OS DADOS DEPENDENDO SE A PAG É DE LOGIN OU REGISTRO
   const [isLoginPage, setIsLoginPage] = useState('/registerdata')

   const [inputValues, setInputValues] = useState({
       username: '',
       password: ''
   })

   const [title, setTitle] = useState(props.title)

   const [photo, setPhoto] = useState(undefined)


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

   // MANIPULA OS DADOS DO ARQUIVO DE FOTO PASSADO
   function handleProfilePhoto(event) {
        const files = event.target.files
        const myImage = files[0]

        if(!myImage.type.match('image/png') && !myImage.type.match('image/jpg') && !myImage.type.match('image/jpeg')) {
          alert('Sorry, only images .JPEG, .JPG and .PNG are allowed')
          return
        } else if(myImage.size > (5000*1024)) {
            alert('Sorry, the max allowed size for images is 5MB')
            return
        } else {
            setPhoto(myImage)
        }

   }

   // FUNÇÃO QUE REDIRECIONA PARA A HOME QUANDO O USUÁRIO É LOGADO/REGISTRADO
   function handlePostLoginRegisterData() {
       setTitle('Loading...')

       let data = new FormData()
       for(let key in inputValues) {data.append(key, inputValues[key])}

        // VERIFICAÇÕES DOS DADOS PASSADOS NO LOGIN-REGISTER
       if(inputValues.username.length < 4 || inputValues.password.length < 4) {
            setTitle('Min length: 4 characters')
       } else if(inputValues.username.length > 15) {
            setTitle('Max length: 15 characters')
       } else if(inputValues.password.search(' ') !== -1 || inputValues.username.search(' ') !== -1) {
            setTitle('Spaces are not allowed')
       } else if(window.location.pathname == '/register' && photo == undefined) {
            setTitle('Please, insert an photo')
       } else if(window.location.pathname == '/login') {
            AxiosLoginRegisterSchema(isLoginPage, data)
       } else {
            const compressOptions = { 
                maxSizeMB: 0.5,
                maxWidthOrHeight: 200
            }

            imgCompression(photo, compressOptions)
                .then(compressed => {
                    data.append('fileimage', compressed) // SEMPRE UM NOME PRA COMBINAR COM O "UPLOAD.SINGLE" DO SERVER

                    AxiosLoginRegisterSchema(isLoginPage, data, {headers: {"Content-Type": `multipart/form-data; boundary=${data._boundary}`}})
                })
       }
   }
 
   // FUNÇÃO QUE CUIDA DA AUTENTICAÇÃO PELA API DO FACEBOOK
   function handleFacebookLoginRegisterData({name, userID, picture: {data: {url}}}) {
       setTitle('Loading...')

        AxiosLoginRegisterSchema('/facebook', {name, userID, url})
   }


    return (
        <div className='LoginPage' onLoad={handleIsLoginPage}>
            <Zoom in={true} timeout={1000} >
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
                            {window.location.pathname == '/register' &&
                                <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id='photoInput' onChange={handleProfilePhoto} name='photo' />
                                    <label class="custom-file-label" for='photoInput'>Your profile photo</label>
                                </div>
                            </div>}
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
import React, {useState} from 'react'

import {Person, Lock, Facebook, Create} from '@material-ui/icons'

import Brand from '../App/InterfacePresets/Left/Brand/Brand'

import Zoom from '@material-ui/core/Zoom'

import FacebookLogin from 'react-facebook-login'

import imgCompression from 'browser-image-compression'

import {Link} from 'react-router-dom'

import api from '../../services/API_CONFIG'

function LoginRegisterPage(props) {
   // FUNÇÃO E HOOK PRA DEFINIR PRA QUAL ROTA O FORM VAI MANDAR OS DADOS DEPENDENDO SE A PAG É DE LOGIN OU REGISTRO
   const [currentPage, setCurrentPage] = useState('/register')

   const [inputValues, setInputValues] = useState({
       login: '',
       password: ''
   })
   const [username, setUsername] = useState('')
   const [photo, setPhoto] = useState({
       data: null,
       filename: 'Your profile photo'
   })

   const [title, setTitle] = useState(props.title)


   // MUDA A ROTA DO POST (FETCH) DEPENDENDO DA URL ATUAL DA PAGINA
   function handleIsLoginPage() {
       if(window.location.pathname === '/login') {
           setCurrentPage('/login')
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
        const myImage = event.target.files[0];

        if(myImage) {
            if(['image/png', 'image/jpg', 'image/jpeg'].indexOf(myImage.type) == -1) {
                alert('Sorry, only images .JPEG, .JPG and .PNG are allowed')
            } else if(myImage.size > (5000*1024)) {
                alert('Sorry, the max allowed size for images is 5MB')
            } else {
                setPhoto({
                    data: myImage,
                    filename: myImage.name.length > 18 ? myImage.name.substring(0, 15) + '...' : myImage.name
                })
            }
        }
   }

   // FUNÇÃO QUE REDIRECIONA PARA A HOME QUANDO O USUÁRIO É LOGADO/REGISTRADO
   function handlePostLoginRegisterData() {
       setTitle('Loading...')

        // VERIFICAÇÕES DOS DADOS PASSADOS NO LOGIN-REGISTER
       if(inputValues.login.length < 4 || inputValues.password.length < 4) {
            setTitle('Min length: 4 characters')
       } else if(inputValues.login.length > 15) {
            setTitle('Max length: 15 characters')
       } else if(inputValues.password.search(' ') !== -1 || inputValues.login.search(' ') !== -1) {
            setTitle('Spaces are not allowed')
       } else if(window.location.pathname == '/register' && !photo.data) {
            setTitle('Please, insert an photo')
       } else if(window.location.pathname == '/login') {
            upload({
                login: inputValues.login,
                password: inputValues.password
            })
       } else {
            const compressOptions = { 
                maxSizeMB: 0.5,
                maxWidthOrHeight: 400
            }

            imgCompression(photo.data, compressOptions)
                .then(photo => {
                    upload({
                        login: inputValues.login,
                        password: inputValues.password,
                        username: username,
                        photo
                    })
                })
       }
   }
 
   // FUNÇÃO QUE CUIDA DA AUTENTICAÇÃO PELA API DO FACEBOOK
   function handleFacebookLoginRegisterData({name, fbId, picture: {data: {url}}, email}) {
        setTitle('Loading...')

        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                return new File([blob], `fb_${name.split(' ').join('_')}`, {type: blob.type})
            }).then(photo => {
                upload({
                  login: email,
                  username: name,
                  fbId,
                  photo,
                })
            })
   }

   function upload(userData) {
        let data = new FormData()
        let header =  {headers: {"Content-Type": `multipart/form-data; boundary=${data._boundary}`}}

        for(let key in userData) {data.append(key, userData[key])}

        api.post(currentPage, data, header).then(response => {
            /* window.location = '/home' */
            console.log('asodnf')
        }).catch(err => {
            setTitle(err.response.data.message)
            console.log(err.response.data)
        })
   }

    return (
        <div className='LoginPage' onLoad={handleIsLoginPage}>
            <Zoom in timeout={1000} >
                <div className='LoginMenu'>
                    <Brand />
                    <div className='LoginRegisterData'>
                        <h1>{title}</h1>
                        <form onSubmit={(e) => {e.preventDefault()}}>
                            <div className='LoginField'>
                                <Person />
                                <input type='text' placeholder='Login' name='login' onChange={handleInputValues} value={inputValues.login} />
                            </div>
                            <div className='PasswordField'>
                                <Lock />
                                <input type='password' placeholder='Password' name='password' onChange={handleInputValues} value={inputValues.password} />
                            </div>
                            {window.location.pathname == '/register' &&
                            <div>
                                <div className='UsernameField'>
                                    <Create />
                                    <input type='text' placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} value={username} />
                                </div>
                                <div className="input-group mb-3" style={{maxWidth: '100%', overflowX: 'hidden'}}>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id='photoInput' onChange={handleProfilePhoto} name='photo' multiple={false}/>
                                        <label className="custom-file-label" htmlFor='photoInput'>{photo.filename}</label>
                                    </div>
                                </div>
                            </div>}
                            <button className='btn btn-lg btn-block btn-outline-danger' onClick={handlePostLoginRegisterData}>{props.title}</button>
                        </form>
                        <div className='FacebookField'>
                            <FacebookLogin
                                appId={process.env.REACT_APP_FB_APP_ID}
                                autoLoad={false}
                                fields="name,email,picture"
                                isMobile={false}
                                callback={handleFacebookLoginRegisterData}
                                cssClass='btn btn-lg btn-primary w-100'
                                icon={<Facebook />}
                                textButton={window.location.pathname == '/login' ? 'Login with Facebook' : 'Register with Facebook'}
                            />
                        </div>
                        {window.location.pathname == '/login' ?
                            <Link to='/register' className='SwitchPageButton'>
                                <button className='btn btn-sm btn-warning'>Not registered? Register here</button>
                            </Link>
                            :
                            <Link to='/login' className='SwitchPageButton'>
                                <button className='btn btn-sm btn-warning'>Already have an account? Log here</button>
                            </Link>
                        }
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default LoginRegisterPage
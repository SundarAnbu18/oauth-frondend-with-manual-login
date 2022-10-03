import React ,{useState}from 'react'
import Google from '../img/google.jpg'
import meta from '../img/meta.png'
import github from '../img/github.png'
import { landingpage } from './landingpage'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('login ')
            window.location.href = '/landingpage'
          }
          else {
            alert('failed')
          }
        }

        const google = () => {
            window.open('http://localhost:4000/auth/google', "_self")
        }

        // const github = () => {
        //     window.open('http://localhost:4000/auth/github', "_self")
        // }


        return (
            <div className='login'><h1 className="loginTitle">
                Choose the login method
            </h1>
                <div className="wrapper">
                    <div className="left">
                        <div className="loginButton google" onClick={google}>
                            <img src={Google} alt="" className="icon" />
                            Google
                        </div>
                        <div className="loginButton meta" >
                            <img src={meta} alt="" className="icon" />
                            Meta
                        </div>
                        {/* <div className="loginButton github" onClick={github}>
                            <img src={github} alt="" className="icon" />
                            Github
                        </div> */}
                    </div>
                    <div className='center'>
                        <div className="line"></div>
                        <div className="or">OR</div>

                    </div>

                    <div className="right" >
                        <form onSubmit={loginUser}>
                            <input value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="name"
                                placeholder='name' />
                            <input value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder='password' />
                            <button className='Submit'>Login</button>
                        </form>
                    </div>


                </div>

            </div>
        )
    }

export default Login
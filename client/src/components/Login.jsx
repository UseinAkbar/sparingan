import React, { useState } from 'react';
import Form from './UI/Form';
import google from '../asset/icon/Google_Icon.svg';
import fb from '../asset/icon/Facebook_Icon.svg';

const Login = () => {
    const [formValue, setFormValue] = useState({email: '', password: ''})
    const {email, password} = formValue

    const handleChange = e => {
        setFormValue(preValue => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <Form className="login">
            <div className="login__form">
                <h1 className="login__form-title">Sign In</h1>
                {/* <a href="#" className="login__link login__google"><img src={google} alt='' />Sign in with Google</a>
                <a href="#" className="login__link login__facebook"><img src={fb} alt='' />Sign in with Facebook</a>
                <span>Or</span> */}
                <form action="" className="">
                    <div className='input-group'>
                        <input type="email" name='email' id='email' required autoComplete='off' autoFocus='on' placeholder='Masukkan email anda' />
                        <label htmlFor="email">Email</label> 
                    </div>
                    <div className='input-group'>
                        <input type="password" name='password' id='password' required autoComplete='off' placeholder='●●●●●●●' />
                        <label htmlFor="password">Password</label> 
                    </div>
                    <div className="login__cta">
                        <button type='submit'>Sign In</button>
                        <p>Don't have an account ? <a href='/register'>Sign up now</a></p>
                        <a href="/forgot">Forgot your password ?</a>
                    </div>
                </form>
            </div>
        </Form>
    )
}

export default Login
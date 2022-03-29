import React, { useState } from 'react';
import Form from './UI/Form';
import google from '../asset/icon/Google_Icon.svg';
import fb from '../asset/icon/Facebook_Icon.svg';

const Register = () => {
    return (
        <Form className='regis'>
            <div className="regis__form">
                <h1 className="regis__form-title">Sign Up</h1>
                {/* <div className="regis__group-link">
                    <a href="#" className="regis__link regis__google"><img src={google} alt='' />Sign up with Google</a>
                    <a href="#" className="regis__link regis__facebook"><img src={fb} alt='' />Sign up with Facebook</a>
                </div>
                <span>Or</span> */}
                <form action="" className="">
                    <div className='input-group'>
                        <input type="text" name='username' id='username' required autoComplete='off' autoFocus='on' placeholder='Masukkan nama anda' />
                        <label htmlFor="username">Nama</label> 
                    </div>
                    <div className='input-group'>
                        <input type="email" name='email' id='email' required autoComplete='off' placeholder='Masukkan email anda' />
                        <label htmlFor="email">Email</label> 
                    </div>
                    <div className='input-group'>
                        <input type="text" name='kota' id='kota' required autoComplete='off' placeholder='Masukkan kota anda' />
                        <label htmlFor="kota">Kota</label> 
                    </div>
                    <div className='input-group'>
                        <input type="text" name='wa' id='wa' required autoComplete='off' placeholder='0812*****' />
                        <label htmlFor="wa">Whatsapp</label> 
                    </div>
                    <div className='input-group'>
                        <input type="password" name='password' id='password' required autoComplete='off' placeholder='●●●●●●●' />
                        <label htmlFor="password">Password</label> 
                    </div>
                    <div className="regis__cta">
                        <button type='submit'>Sign Up</button>
                        <p>Have an account ? <a href='login'>Sign in</a></p>
                    </div>
                </form>
            </div>
        </Form>
    )
}

export default Register
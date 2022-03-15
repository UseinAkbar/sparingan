import React from 'react';
import logo from '../asset/icon/Logo_Sportgather.svg'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__group">
                <img src={logo} alt="" className="navigation__logo" />
                <a href="/" className="navigation__link">Home</a>
                <a href="/pertandingan" className="navigation__link">Pertandingan</a>
            </div>
            <a href="#" className="navigation__btn-sign">Sign in / Sign Up</a>
        </div>
    )
}

export default Navigation
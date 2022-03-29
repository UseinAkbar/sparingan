import React from 'react';
import user from '../asset/Image/Image_Profil.png';

const NavProfile = () => {
    return (
        <div className="navprofile">
            <button type='button' className="navprofile__btn">Buat Pertandingan</button>
            <div className="navprofile__user">
                <img src={user} alt="User Profile Image" className='navprofile__img'/>
                <h2 className="navprofile__username">Rangga Lesmana</h2>
                <div className="navprofile__option">
                    <a href="/profile" className="navprofile__link">Profile</a>
                    <a href="#" className="navprofile__link">Your Match</a>
                    <a href="#" className="navprofile__link">Sign Out</a>
                </div>
            </div>
        </div>
    )
}

export default NavProfile
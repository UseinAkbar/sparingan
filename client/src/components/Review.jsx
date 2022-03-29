import React, { useState } from 'react';
import profil from '../asset/Image/Image_Profil.png';

const Review = () => {
    return (
        <div className="review">
            <h1 className="review__title">Komentar dari temanmu</h1>
            <div className="review__profile">
                <img src={profil} alt="profil user" />
                <div className="review__name">
                    <h1>“Websitenya sangat membantu untuk saya ketika ingin bertanding dan bingung untuk mencari lawannya siapa.”</h1>
                    <h2>Rangga Lesmana</h2>
                    <h3>Pesepakbola Amatir</h3>
                </div>
            </div>
        </div>
    )
}

export default Review
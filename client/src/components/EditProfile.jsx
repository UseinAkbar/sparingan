import React, { useState } from 'react';
import user from '../asset/Image/Image_Profil.png';

const EditProfile = () => {
    const [profile, setProfil] = useState({username: 'Rangga Lesmana', status: 'Profesional', kota: 'Bandung', wa: '08123456789', email: 'john@gmail.com'})
    const {username, status, kota, wa, email} = profile

    const handleChange = (e) => {
        setProfil(preValue => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="profil">
            <div className="profil__info">
                <img src={user} alt={username} />
                <h1>{username}</h1>
                <div>
                    <h2>{status}</h2>
                    <h2>{kota}</h2>
                </div>
            </div>
            <div className="profil__input">
                <form action="">
                    <div className="profil__input-group">
                        <label htmlFor="username">Nama</label>
                        <input type="text" name='username' value={username} id='username' onChange={handleChange}/>
                    </div>
                    {/* <div className="profil__input-group">
                        <label htmlFor="status">Status Pemain</label>
                        <input type="text" value={nama} id='status'/>
                    </div>
                    <div className="profil__input-group">
                        <label htmlFor="kota">Kota</label>
                        <input type="text" value={nama} id='kota'/>
                    </div> */}
                    <div className="profil__input-group">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" name='wa' value={wa} id='whatsapp' onChange={handleChange}/>
                    </div>
                    <div className="profil__input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={email} id='email' onChange={handleChange}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile
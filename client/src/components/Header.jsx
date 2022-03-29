import React, { useState } from 'react';
import key from '../asset/icon/Key.svg'
import location from '../asset/icon/Location_Icon.svg'

const Header = () => {
    const cabangOlahraga = ['sepakbola', 'futsal', 'tenis meja', 'tenis lapangan', 'badminton', 'golf', 'volley']
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <header className="header">
            <h1 className="header__title">Cari Lawan Terbaikmu Untuk Bertanding</h1>
            <div className="header__form-group">
                <form action="" className="header__form" onSubmit={handleSubmit}>
                    <select name="cabang" id="cabor" className="form__cabor" required>
                        <option value=''>Cabang Olahraga</option>
                        {cabangOlahraga.map((item, i) => <option value={item} className={`cabangOption cabangOption-${i+1}`}>{item}</option>)}
                    </select>
                    <div className="form__lokasi">
                        <img src={location} alt="" />
                        <input type="text" value={value} onChange={handleChange} placeholder='Lokasi Tempat' name="lokasi" required autoComplete='off'/>
                    </div>
                    <select name="status" id="pemain" className="form__status" required>
                        <option value=''>Status Pemain</option>
                        <option value="profesional">Profesional</option>
                        <option value="amatir">Amatir</option>
                    </select>
                    <button type='submit' className="form__btn">Cari</button>
                </form>
            </div>
        </header>
    )
}

export default Header
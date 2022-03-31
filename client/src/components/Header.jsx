import React, { useState } from 'react';
import SearchMatch from './SearchMatch';
import { opsiOlahraga } from './data'; 
import key from '../asset/icon/Key.svg'

const Header = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <header className="header">
            <h1 className="header__title">Cari Lawan Terbaikmu Untuk Bertanding</h1>
            <div className="header__form-group">
                <SearchMatch handleSubmit={handleSubmit} className={'header__form'} selectClassName={'header__input-group'} />
            </div>
        </header>
    )
}

export default Header
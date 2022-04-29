import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../contexts/DarkModeContext';
import { AuthContext } from '../contexts/UserContext';
import { BtnDarkMode } from './BtnDarkMode';

export default function Menu() {
    const { theme, setTheme } = useContext(Context);
    const { auth } = useContext(AuthContext);
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
            </li>
            <li className='nav-item'>
                <a href="/#" className="nav-link">
                    <span>{auth.name}</span> <br />
                    <span><small>{auth.email}</small></span>
                </a>
            </li>
            <li className="nav">
                <BtnDarkMode theme={theme} setTheme={setTheme} />
            </li>
        </ul>
    )
}
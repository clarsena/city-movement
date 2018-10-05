import React from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';

const Nav = () => {
    return (
        <nav>
            <div className="wrapper">
                <div className="nav__logo">
                    <img src={logo} alt="Company Logo"/>
                </div>
                <ul className="nav__list">
                    <li className="nav__list__item">Organizations</li>
                    <li className="nav__list__item">Influencers</li>
                    <li className="nav__list__item">Events</li>
                    <li className="nav__list__item">Goals</li>
                </ul>
                <div className="nav__extras">
                    <button className="nav__button">Join</button>
                    <img src={avatar} className="avatar" alt="Avatar"/>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
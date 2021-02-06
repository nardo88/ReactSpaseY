import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../logo.svg';


const Header = ({rockets, changeRocket}) => {

    return (
        <>
        <header className="header">
            <Link to="/">
                <img src={Logo} alt="Logo Space X" className="logo"/>
            </Link>
            <nav className="main-nav nav">
                <ul className="list">
                    {
                        rockets.map((item, i) => <li key={i} className="item"><Link to="/rocket" onClick={ () => {
                            changeRocket(item);
                        }} className="item-link">{item}</Link> </li>)
                    }
                </ul>
            </nav>
            <nav className="secondary-nav">
                <ul className="list">
                <li className="item">
                    <NavLink exact to="/" className="item-link" activeClassName="active">Home</NavLink>
                </li>
                <li className="item">
                    <NavLink to="/calendar" className="item-link" activeClassName="active">Calendar</NavLink>
                </li>
                </ul>
            </nav>
        </header>
        </>
    )
}


export default Header;
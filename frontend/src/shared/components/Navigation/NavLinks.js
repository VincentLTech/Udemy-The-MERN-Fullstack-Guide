import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
//11. We are going to add a new type of feature called NavLink to analyze the 
//url and allows us to color the link different if we are on the page the link 
//leads to. to show the user that this is the curerently active link

// import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
    // 11. All of this is basically the navigation you will be using that will be thrown into MainNavigation where all the NavLink options you have will be accessible there.
    return (
        <ul className="nav-links">
            <li>
                {/* 11.this will be the first button in the navbar that will show all users */}
                <NavLink to="/" exact>
                    ALL USERS
                </NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>

            </li>
            <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>

            </li>
            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>

            </li>

        </ul>
    );
};
    
export default NavLinks;
    
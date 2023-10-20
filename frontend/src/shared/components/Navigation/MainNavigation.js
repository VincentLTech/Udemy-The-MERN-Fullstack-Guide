import React from 'react';//10
import { useState } from 'react';//14 I want to manage some state, I want to manage the state where the drawer is opened or not.
import {Link } from 'react-router-dom';

import MainHeader from './MainHeader';//10
import NavLinks from './NavLinks';//11. Adding Navlinks so that you can have navigation options in <nav>
import SideDrawer from './SideDrawer';//12. Adding SideDrawer so that you can have the sidedrawer on the Left side of the screen.
import Backdrop from '../UIElements/Backdrop';//14 to import backdrop in order to use it
import './MainNavigation.css';//10

const MainNavigation= props => {//10
    //15 i removed this because this used to be the original sidedraw but i added react-transition group to animate the sidedrawers
    // {drawerIsOpen ?//14 this is used to toggle the drawer when you click on the menu button.
    //         (
    //         <SideDrawer>{/* 12 */}
    //             <nav className='main-navigation__drawer-nav'>{/* 12 */}
    //                 <NavLinks/>{/* 12 */}
    //             </nav>{/* 12 */}
    //         </SideDrawer>// 12
    //         )
    //         :
    //         null
    //         }
    //         {/* drawerIsOpen ? can also be written as drawerIsOpen && so you dont need null */}
            
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);//14 we can have our drawer is open state and set drawer is open as a function to update that state and initially let's say that is false, with use state and the initial state.
    //14 these are functions that we will use to set the very useState to open or close. And based on the state, it will toggle the drawer when you click on the menu button.
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    return (
        <React.Fragment>{/*12 To return multiple root elements, react has a feature called React.Fragment that enables you to have as many nested elements you want */}
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}{/* 15 . With that, we render the backdrop and the backdrop component listens to a click on the backdrop, so on this background and then emits a function it expects to get on an on click prop on its own.*/}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>{/* 12 */}{/* 15 onClick={closeDrawer} */}
                <nav className='main-navigation__drawer-nav'>{/* 12 */}
                    <NavLinks/>{/* 12 */}
                </nav>{/* 12 */}
            </SideDrawer>{/* 12 */}
            
            <MainHeader>{/* 10 All of this is actually the navbar you are sending it to the MainHeader to modify its looks */}
                {/*  */}
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>{/* 10  */}
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="main-navigation__title">{/* 10 this is basically the title that takes you back to home screen */}
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className="main-navigation__header-nav">{/* 10 this will be the navigation for your */}
                    {/* 12. className="main-navigation__header-nav this class with the css will remove the navlinks when you view via phones.*/}
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}
export default MainNavigation;//10
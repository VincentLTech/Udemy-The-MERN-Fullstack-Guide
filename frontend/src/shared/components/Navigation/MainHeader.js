import React from 'react';//10

import './MainHeader.css';//10

const MainHeader = props => {//10 the objective of this component is to apply the MainHeader.css to the navbar 
  return <header className="main-header">
    {props.children}
    {/* 10 props.children will always refer to the things you pass to you opening and closing tags */}
    {/* 10 when you use props.children you actually are applying the css to all of this below in the MainNavigation
    If you encase the buttons and other nav features with this Component and remove props.children it will lose all 
    of its features for you converted everything into MainNavigation and then not have anything.
    <MainHeader>
        <button className="main-navigation__menu-btn">
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">YourPlaces</Link>
        </h1>
        <nav>
            ...
        </nav>
    </MainHeader>
    */}
    </header>
};//10

export default MainHeader;//10

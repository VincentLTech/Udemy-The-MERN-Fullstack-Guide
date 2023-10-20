import React from 'react';//12
import ReactDOM from 'react-dom';//13 We need to import React DOM from react-dom, this is the other part of the React library which thus far we only used to render the React application itself
import { CSSTransition } from 'react-transition-group';//15 activate "npm install --save react-transition-group"import something from React transition group and that something is the CSS transition component, so that's a component provided by this third-party library.

import './SideDrawer.css';//12

const SideDrawer = props => {//12
    const content = (
    <CSSTransition // 15 It's a component you should wrap around this aside element here, so CSS transition can be used as a component in jsx and is wrapped around aside.
        in={props.show} //this show prop properly, so to side drawer
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
    >
        <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>{/* 13 back to the side drawer, we have to tell React that it should render this content here. */}
    {/* 15 onClick={props.onClick} is needed because without it, you can press a button or anywhere on the navbar and it will not close the navbar unless you clock on the black area. but with it, you can press the button or any area on the white spot to close upon clicking. */}
    </CSSTransition>
    );
    // return(//12
        //12
        // const content =<aside className="side-drawer">{/*12  aside is a default HTML element which should render props children and that will be my drawer*/}
        //     {props.children}
        // </aside>;

    // );//12
    //13 this is an alternative way to render the sider drawer using portals
    return ReactDOM.createPortal(// 13 We can also use React DOM.createPortal
        content,//13 and now we tell React which content to render where and
        document.getElementById('drawer-hook')//13 and then we need to select a place in the DOM where this content should be rendered when this component is mounted, when this component is used and here I want to get an element by ID in my HTML page and there I used the ID I just assigned there which is the drawer hook. 
    );//13 Now if we save that, we see the same result as before but semantically this is now rendered differently  it's inside of the drawer hook now.
};

export default SideDrawer;
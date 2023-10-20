import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';//4 Add this after following step 3 in README.md
// import {Redirect} from 'react-router-dom';//5 Add this after following step 3 in README.md
// import {Routes as Switch} from 'react-router-dom';//5 Add this after following step 3 in README.md
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
function App() {
  return (
    <BrowserRouter>{/* this is used so you can add routes "https:localhost:3000/help" */}
      <MainNavigation/>
        <main>
        <Routes>
          <Route path ="/" element={<Users/>}/>{/*  */}
          <Route path ="/places/new" element={<NewPlace/>}/>
        {/* <Redirect to="/"/> */}
        </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;

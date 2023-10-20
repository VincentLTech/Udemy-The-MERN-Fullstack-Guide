import React from 'react';
import UsersList from '../components/UsersList';//6
const Users =() =>{
    const USERS = [//6
        {//6
            id: 'u1',//6
            name: 'Max Schwarz',//6
            image:'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',//6
            places: 3//6
        }//6
    ];//6
    return(//6
        <UsersList items={USERS}/>//6
    )//6
};//6
export default Users;
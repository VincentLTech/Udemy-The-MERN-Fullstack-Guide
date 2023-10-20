import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';// 8
import './UsersList.css';
//6
const UsersList = props => {
  if (props.items.length === 0) {//6//this will check to see if the information you sent to his component as props has anything. If there is nothing, it will show as nothing.
    return (
      // <div className="center">{/* 6*/}
        <Card>{/* 8*/}
          <h2>No users found.</h2>{/* 6*/}
        </Card>
      // </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (//6//whatever you send as props
        <UserItem//6
          key={user.id}//6
          id={user.id}//6
          image={user.image}//6
          name={user.name}//6
          placeCount={user.places}//6
        />
      ))}
    </ul>
  );
};

export default UsersList;

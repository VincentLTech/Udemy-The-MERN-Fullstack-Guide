import React from 'react';//7
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = props => {//7

  return (//7
    <li className="user-item">{/* 7 */}
      {/* <div className='user-item__content'> */}{/* 7 */}
        <Card className='user-item__content'>
          <Link to={`/${props.id}/places`}>{/* 8. You want to add this because it a new link for every user */}
            <div className='user-item__image'>{/* 7 */}
              <Avatar image={props.image} alt={props.name}/>{/* 8. now what you sent is props.alt and props.image */}
              {/* <img src={props.image} alt={props.name}/>7 */}
            </div>{/* 7 */}
            <div className="user-item__info">{/* 7 */}
              <h2>{/* 7 */}
                {props.name}{/* 7 */}
              </h2>{/* 7 */}
              <h3>{/* 7 */}
                {props.placeCount}{/* 7 */}
                {props.placeCount ===1 ? 'Place' : 'Places'}{/* 7 */}{/* if prop.placeCount is not 1, it will use the ternary and use "Places" */}
              </h3>{/* 7 */}
            </div>{/* 7 */}
          </Link>{/* 8 */}
        </Card>
      {/* </div> */}{/* 7 */}
    </li>
  );
};

export default UserItem;

import PropTypes from 'prop-types';
import { FriendsItem } from "./FriendListItem"


export const FriendList = ({ friends }) => {
    return (<ul>
       { friends.map(({ avatar, name, isOnline, id}) => { 
        return ( <FriendsItem 
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            />) 
        })
    } 
  </ul> )
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };
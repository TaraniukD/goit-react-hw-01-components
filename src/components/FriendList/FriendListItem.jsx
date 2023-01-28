
import { FriendsOnline, FriendsOfline} from './FriendList.styled';

export const FriendsItem = ({ avatar, name, isOnline }) => {
    return ( <li class="item">
             <span >{isOnline ? <FriendsOnline /> : <FriendsOfline />}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
          </li>
          )};


import { FriendsLi, FriendsImg, FriendsOnline, FriendsOfline, FriendsText} from './FriendList.styled';

export const FriendsItem = ({ avatar, name, isOnline }) => {
    return ( <FriendsLi>
             <span >{isOnline ? <FriendsOnline /> : <FriendsOfline />}</span>
            <FriendsImg src={avatar} alt={name} width="48" />
            <FriendsText>{name}</FriendsText>
          </FriendsLi>
          )};

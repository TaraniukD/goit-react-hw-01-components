import PropTypes from 'prop-types';
import { FiAtSign } from "react-icons/fi";
import { ProfileContainer,
        ProfileUserContainer,
        ProfileImg,
        ProfileTitle,
        ProfileText,
        ProfileList,
        ProfileItem,
        ProfileSpan,
        ProfileSpanTitle
         } from './Profile.styled';

export const Profile = ({ 
   username, tag, location, avatar, stats
}) => {
return (<ProfileContainer>
<ProfileUserContainer>
  <ProfileImg
    src={avatar}
    alt={username}
  />
  <ProfileTitle>{username}</ProfileTitle>
  <ProfileText><FiAtSign />{tag}</ProfileText>
  <ProfileText>{location}</ProfileText>
</ProfileUserContainer>

<ProfileList>
  <ProfileItem>
    <ProfileSpanTitle>Followers</ProfileSpanTitle>
    <ProfileSpan>{stats.followers}</ProfileSpan>
  </ProfileItem>
  <ProfileItem>
    <ProfileSpanTitle>Views</ProfileSpanTitle>
    <ProfileSpan>{stats.views}</ProfileSpan>
  </ProfileItem>
  <ProfileItem>
    <ProfileSpanTitle>Likes</ProfileSpanTitle>
    <ProfileSpan>{stats.likes}</ProfileSpan>
  </ProfileItem>
</ProfileList>
</ProfileContainer>);
};

Profile.propTypes = {
  username:PropTypes.string.isRequired, 
  tag:PropTypes.string.isRequired, 
  location:PropTypes.string.isRequired, 
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.exact ({ 
    followers:PropTypes.number.isRequired, 
    views:PropTypes.number.isRequired, 
    likes:PropTypes.number.isRequired
})
}


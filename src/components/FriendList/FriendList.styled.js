import styled from 'styled-components'

export const FriendsList = styled.ul`
width: 220px;
margin-left: auto;
margin-right: auto;
padding: 10px;
background-color: #e0ece8;
list-style: none;
border: 1px solid  rgb(1, 1, 1);
border-radius: 10px;
box-shadow: 0px 0px 8px 5px rgb(0 0 0 / 20%);
`; 

export const FriendsLi = styled.li`   
display: flex;
align-items: center;
gap: 15px;
margin-bottom: 10px;
padding: 4px;
background-color: #fae8b6;
border: 1px solid  rgb(1, 1, 1);
border-radius: 10px;
box-shadow: 0px 0px 6px 2px rgb(0 0 0 / 20%);
cursor: pointer;
`;

export const FriendsImg = styled.img`   
background-color: #dae9ec;
border: 1px solid  #dae9ec;
border-radius: 10px;
padding: 4px;
`;

export const FriendsOnline = styled.div`
width: 15px;
height: 15px;
background-color: green;
border-radius: 50%;`;

export const FriendsOfline = styled.div`
width: 15px;
height: 15px;
background-color: red;
border-radius: 50%;`;

export const FriendsText = styled.p`   
font-weight: 500;
font-size: 18px;
`;
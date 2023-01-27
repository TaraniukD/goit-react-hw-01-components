import styled from 'styled-components'

export const ProfileContainer = styled.div`   
margin-top: 30px;
text-align: center;
padding: 20px 15px;
border: 1px solid  rgb(1, 1, 1);
border-radius: 10px;
background-color: #e1efef;
box-shadow: 0px 0px 8px 5px rgb(0 0 0 / 20%);
`;

export const ProfileUserContainer = styled.div`   
padding: 15px 15px;
border: 1px solid  rgb(1, 1, 1);
border-radius: 10px;
`;

export const ProfileImg = styled.img`   
width: 250px;
margin-bottom: 12px;
border-radius: 50%;
border: 1px solid  rgb(1, 1, 1);
`;

export const ProfileTitle = styled.p`   
margin: 0;
margin-bottom: 8px;
font-weight: 500;
font-size: 30px;
`;

export const ProfileText = styled.p`   
margin: 0;
margin-bottom: 8px;
font-size: 20px;
`;

export const ProfileList = styled.ul`   
display: flex;
margin: 15px;
padding: 10px 8px;
list-style: none;
justify-content: space-between;
`;

export const ProfileItem = styled.li` 
display: block;  
font-weight: 400;
font-size: 15px;
`;

export const ProfileSpanTitle = styled.span` 
display: block;  
margin-bottom: 8px;
font-weight: 400;
font-size: 20px;
`;

export const ProfileSpan = styled.span` 
display: block;  
max-width: 40px;
font-weight: 500;
font-size: 20px;
`;
import styled from 'styled-components';

export const StatSection = styled.section`
margin-left: auto;
margin-right: auto;
margin-bottom: 30px;
width: 320px;
text-align: center;
border: 1px solid  rgb(1, 1, 1);
border-radius: 10px;
background-color: #3eb0d2;
box-shadow: 0px 0px 8px 5px rgb(0 0 0 / 20%);
`;

export const StatList = styled.ul`   
display: flex;
gap: 6px;
margin: 0;
padding: 4px;
list-style: none;
`;

export const StatItem = styled.li` 
width: calc((100% - 24px)/5);
padding: 6px;
border: 1px solid  rgb(1, 1, 1);
border-radius: 10px;
cursor: pointer;
`;

export const SpanLabel = styled.span`   
display: block;
margin-bottom: 10px;
color: white;
`;

export const SpanData = styled.span`   
font-weight: 500;
font-size: 18px;
color: white;
`;
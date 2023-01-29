import styled from 'styled-components';

export const TransactionTable = styled.table`
width: 600px;
margin-left: auto;
margin-right: auto;
margin-top: 30px;
margin-bottom: 30px;
padding: 10px;
background-color: #e0ece8;
border: 1px solid  rgb(1, 1, 1);
border-collapse: collapse;
box-shadow: 0px 0px 8px 5px rgb(0 0 0 / 20%);
`; 

export const TransactionTh = styled.th`
border: 1px solid  #2fa6c8;
padding: 8px;
text-align: center;
background-color: #5fc2d7;
`; 

export const TransactionTr = styled.tr`
text-transform: uppercase;
`;  

export const TransactionItemTr = styled.tr`
font-size: 17px;
letter-spacing: 0.04em;
scale: 0.9;
&:hover,
&:focus {
    background-color: #5fc2d7;
    scale: 1;
}
cursor: pointer;
`;  

export const TransactionTd = styled.td`
border: 1px solid  #2fa6c8;
padding: 4px;
text-align: center;
`; 
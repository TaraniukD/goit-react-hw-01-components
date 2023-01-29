import PropTypes from 'prop-types';
import { TransactionHistoryItems } from './TransactionHistoryItems';

import { TransactionTable, TransactionTr, TransactionTh } from './TransactionHistory.module';

export const TransactionHistory = ({ items }) => {
 return (
    <TransactionTable>
    <thead>
      <TransactionTr>
        <TransactionTh>Type</TransactionTh>
        <TransactionTh>Amount</TransactionTh>
        <TransactionTh>Currency</TransactionTh>
      </TransactionTr>
    </thead>
    <tbody>
    {items.map(({ type, amount, currency, id }) => {
        return ( 
       <TransactionHistoryItems 
        key={id}
        type={type}
        amount={amount}
        currency={currency}
       />)}
    )}  
    </tbody>
  </TransactionTable>
);
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
  };
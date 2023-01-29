import { TransactionTd, TransactionItemTr } from './TransactionHistory.module';

export const TransactionHistoryItems = ({ type, amount, currency }) => {
    return (
      <TransactionItemTr>
        <TransactionTd>{type}</TransactionTd>
        <TransactionTd>{amount}</TransactionTd>
        <TransactionTd>{currency}</TransactionTd>
      </TransactionItemTr>
          )};
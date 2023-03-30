import css from '../style/TransactionHistory.module.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const TransactionHistoryItem = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <tr key={item.id}>
          <td>{capitalizeFirstLetter(item.type)}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </>
  );
};

const TransactionHistory = ({ children }) => {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </>
  );
};

export { TransactionHistory, TransactionHistoryItem };

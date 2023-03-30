import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList, FriendListItem } from './FriendsList/FriendList';
import {
  TransactionHistory,
  TransactionHistoryItem,
} from './Transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>

      <TransactionHistory>
        <TransactionHistoryItem items={transactions} />
      </TransactionHistory>
    </>
  );
};

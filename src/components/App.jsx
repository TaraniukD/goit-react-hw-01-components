
import { Profile } from "components/Profile/Profile";
import { Statistics} from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <div style={{    
      width: '1200px',
      margin: '0 auto',
      backgroundColor: '#f5f1f0',
      padding: '30px',
      border: '1px solid #f5f1f0',
      borderRadius: '10px'
      }}>

      <Profile 
      key={user.username} 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
       />

       <Statistics title="Upload stats" stats={data}/>
       <Statistics stats={data} />

       <FriendList friends={friends} />

       <TransactionHistory items={transactions} />

    </div>
  );
};

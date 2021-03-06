import React from "react";
import Profile from "./task1/profile/Profile";
import user from "./task1/profile/user.json";
import Statistics from "./task2/statistics/Statistics";
import StatsRender from "./task2/statsRender/StatsRender";
import statisticalData from "./task2/statistics/statistical-data.json";
import FriendList from "./task3/friendList/FriendList";
import friends from "./task3/friendList/friends.json";
import TransactionHistory from "./task4/transactionHistory/TransactionHistory";
import transactions from "./task4/transactionHistory/transactions.json";

export default function App() {
  return (
    <>
      <Profile {...user} />

      <Statistics title="Upload stats">
        <StatsRender stats={statisticalData} />
      </Statistics>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

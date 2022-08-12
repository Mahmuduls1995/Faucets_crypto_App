import React from "react";

const HomeTestLinkHistory = () => {
  const history = [
    {
      id: "1",
      time: "3:30 PM",
      amount: "4215",
      hash: "4s8er5ejhweiusjafg74hhjkase35fe57rurks",
    },
    {
      id: "2",
      time: "2:00 PM",
      amount: "42378",
      hash: "sf7s7ers4ejahdue34h57r7wser",
    },
    {
      id: "3",
      time: "9:00 AM",
      amount: "3462",
      hash: "se4s7nj3nj3jro3er7",
    },
  ];
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-1/2">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Time</th>
            <th>Amount</th>
            <th>History</th>
          </tr>
        </thead>

        <tbody>
          {history.map((h, index) => (
            <tr key={h.id}>
              <th>{index + 1}</th>
              <td>{h.time}</td>
              <td>{h.amount}</td>
              <td>{h.hash}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTestLinkHistory;

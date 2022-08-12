import React from "react";

const HomeETHHistory = () => {
  const history = [
    {
      id: "1",
      time: "10:00 AM",
      amount: "345",
      hash: "4s8er5s5fe57rjmxnfuewrurks",
    },
    {
      id: "2",
      time: "12:00 PM",
      amount: "678",
      hash: "sf7s7ers4e7r7wser",
    },
    {
      id: "3",
      time: "1:00 AM",
      amount: "908",
      hash: "se4s7er7",
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

export default HomeETHHistory;

import React from "react";

function randomQuote() {
  let randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  // let quote = `${__dirname}images/quote/q${randomNum}.jpg`;
  return <img src="../images/quote/q0.jpg" alt="quote" />;
}

export default function Quote() {
  const TodaysQuote = randomQuote();
  return (
    <div>
      <h3>今日の名言</h3>
      {TodaysQuote}
    </div>
  );
}

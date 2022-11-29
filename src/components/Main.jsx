import React from 'react';
import Die from './Die';

export default function Main() {
  const allNewDice = () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 7) + 1);
  console.log(allNewDice());

  const dieEl = allNewDice().map((die) => <Die value={die} />);
  return (
    <main>
      <div className="dice">
        {dieEl}
      </div>
    </main>
  );
}

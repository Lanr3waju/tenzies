import React from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Die from './Die';
import ToggleBtn from './ToggleBtn';
import darkDice from '../img/dice-black.png';
import whiteDice from '../img/dice-white.png';

export default function Main() {
  const generateRandomNo = () => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid(),
  });

  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i += 1) {
      newDice.push(generateRandomNo());
    }
    return newDice;
  };

  const [diceArr, setDiceArr] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const initialValue = diceArr[0].value;
    const allHeld = diceArr.every((die) => die.isHeld);
    const sameValue = diceArr.every((die) => die.value === initialValue);

    if (allHeld && sameValue) {
      setTenzies(true);
    }
  }, [diceArr]);

  function holdDice(id) {
    setDiceArr((oldDice) => oldDice.map((die) => (die.id === id
      ? { ...die, isHeld: !die.isHeld }
      : die)));
  }

  const dieEl = diceArr.map(({ value, id, isHeld }) => (
    <Die
      isDark={isDark}
      held={isHeld}
      value={value}
      id={id}
      holdDice={() => holdDice(id)}
      key={id}

    />
  ));

  const newGame = ({ target }) => {
    if (target.textContent === 'New Game') {
      setTenzies(false);
      setDiceArr(allNewDice);
    }
  };

  const handleIsDark = () => {
    setIsDark((prevState) => !prevState);
  };

  const rollDice = (event) => {
    setDiceArr((oldDiceArr) => oldDiceArr.map((die) => (die.isHeld ? die : generateRandomNo())));
    newGame(event);
  };

  return (
    <main className={isDark ? 'dark-main' : ''}>
      <ToggleBtn
        handleIsDark={handleIsDark}
      />
      <section className={isDark ? 'main dark-section' : 'main'}>
        {tenzies && <Confetti />}
        <h1 className="title">
          Tenzies
          {' '}
          <img alt="pair of dice" className={isDark ? 'dice-icon rotate-dice' : 'dice-icon'} src={isDark ? whiteDice : darkDice} />
          {' '}
        </h1>
        <p className="instructions">
          Roll until all dice are the same.
          Click each die to freeze it at its current value between rolls.
        </p>
        <div className="dice">
          {dieEl}
        </div>
        <button type="button" className="roll-dice" onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </section>
    </main>
  );
}

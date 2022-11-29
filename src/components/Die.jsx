import React from 'react';
import PropTypes from 'prop-types';

export default function Die({
  value, held, holdDice,
}) {
  return (
    <button type="button" onClick={holdDice} onKeyDown={holdDice} className={held ? 'die hold-die' : 'die'}>{value}</button>
  );
}

Die.propTypes = {
  value: PropTypes.number.isRequired,
  held: PropTypes.bool.isRequired,
  holdDice: PropTypes.func.isRequired,
};

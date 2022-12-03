import React from 'react';
import PropTypes from 'prop-types';

export default function Die({
  value, held, holdDice, isDark,
}) {
  const darkDie = () => {
    if (!held) {
      return {
        backgroundColor: '#050f14',
        color: '#f5f5f5',
        boxShadow: '2px 2px #f5f5f5',
      };
    }
    return {
      backgroundColor: '#050f14',
      color: '#59e391',
      boxShadow: '2px 2px #59e391',
    };
  };
  return (
    <button type="button" style={isDark ? darkDie() : {}} onClick={holdDice} onKeyDown={holdDice} className={held ? 'die hold-die' : ' die'}>{value}</button>
  );
}

Die.propTypes = {
  value: PropTypes.number.isRequired,
  held: PropTypes.bool.isRequired,
  holdDice: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

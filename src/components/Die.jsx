import React from 'react';
import PropTypes from 'prop-types';

export default function Die({ value }) {
  return (
    <div className="die">{value}</div>
  );
}

Die.propTypes = {
  value: PropTypes.number.isRequired,
};

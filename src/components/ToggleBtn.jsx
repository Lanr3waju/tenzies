import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleBtn({ handleIsDark }) {
  return (
    <label className="switch" htmlFor="switch">
      <input
        id="switch"
        type="checkbox"
        onClick={handleIsDark}
      />
      <span className="slider round" />
    </label>
  );
}

ToggleBtn.propTypes = {
  handleIsDark: PropTypes.func.isRequired,
};

import React from 'react';

export default function ToggleBtn() {
  return (
    <div className="toggle-switch">
      <label htmlFor="toggle-box">
        <input id="toggle-box" type="checkbox" />
        <span className="slider" />
      </label>
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, newItem }) {
  return (
    <form action="#" className="form-class" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={newItem}
      />
      <button type="submit">
        <FaPlus onClick={handleSubmit} />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newItem: PropTypes.string.isRequired,
};

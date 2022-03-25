import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegEdit } from 'react-icons/fa';

import './List.css';

export default function List({ itemList, handleEdit, handleDelete }) {
  return (
    <ul>
      {itemList.map((item, index) => (
        <li key={item}>
          {item}
          <span>
            <FaRegEdit onClick={() => { handleEdit(index); }} className="edit" />
            <FaCheckCircle onClick={() => { handleDelete(index); }} className="delete" />
          </span>
        </li>
      ))}

    </ul>
  );
}

List.propTypes = {
  itemList: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

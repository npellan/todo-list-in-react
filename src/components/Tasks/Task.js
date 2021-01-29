// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Task = ({
  id, label, done, checkingTask,
}) => (
  <li className={done ? 'task task--checked' : 'task'}>
    <label className="task__label" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className="task__checkbox"
        checked={done}
        onChange={() => {
          checkingTask(id, label, done);
        }}
      />
      {label}
    </label>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  checkingTask: PropTypes.func,
};

Task.defaultProps = {
  checkingTask: () => {},
};

// == Export
export default Task;

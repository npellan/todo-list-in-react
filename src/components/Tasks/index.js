/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Task from './Task';

// == Composant
const Tasks = ({ tasks, checkingTask }) => (
  <div className="tasks">
    <ul>
      {tasks.map((task) => (
        <Task
          id={task.id}
          label={task.label}
          done={task.done}
          key={task.id}
          checkingTask={checkingTask}
        />
      ))}
    </ul>
  </div>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  checkingTask: PropTypes.func,
};

Tasks.defaultProps = {
  checkingTask: () => {},
};

// == Export
export default Tasks;

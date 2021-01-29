// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Counter = ({ doing }) => (
  <div className="counter">
    {doing} tâche{doing > 1 ? 's' : ''} en cours
  </div>
);

Counter.propTypes = {
  doing: PropTypes.number.isRequired,
};

// == Export
export default Counter;

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// const Input = ({ inputValue, onChange, onSubmit }) => {
// == Composant
class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  /**
   * Fonction qui empêche le rechargement de la page
   * et qui envoie au composant Todo la valeur de l'input saisi
   * @param {F} event
   */
  handleSubmit = (event) => {
    const { inputValue, onSubmit } = this.props;
    event.preventDefault();
    onSubmit(inputValue);
  };

  render() {
    const { inputValue, onChange } = this.props;

    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="task-input"
          placeholder="Ajouter une tâche"
          value={inputValue}
          onChange={onChange}
        />
      </form>
    );
  }
}

Input.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Input.defaultProps = {
  inputValue: '',
  onChange: () => {},
  onSubmit: () => {},
};

// == Export
export default Input;

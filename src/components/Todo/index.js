// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Input from 'src/components/Input';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';
import tasksData from 'src/data/tasks';

// == Composant
class Todo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksData,
      inputValue: '',
    };
  }

  /**
   * Fonction qui marque une tâche comme effectuée
   */
  handleCheckingTask = (id, label, done) => {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.map((task) => (task.id === id ? { ...task, done: !done } : task)),
    });
  };

  /**
   * Fonction qui "suit" les changements de la valeur de l'input d'ajout de tâches
   */
  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  /**
   * Fonction qui ajoute une tâche au moment de la soumission du form
   */
  addTask = (label, done = false) => {
    const { tasks } = this.state;

    const maxID = (Math.max(...tasks.map((task) => task.id)) + 1);

    this.setState({
      tasks: [...tasks, { id: maxID, label, done }],
      inputValue: '',
    });
  }

  render() {
    const { tasks, inputValue } = this.state;

    const tasksInProgress = tasks.filter((task) => !task.done).length;

    const sortedTasks = tasks.sort(
      (a, b) => ((a.done > b.done) ? 1 : ((b.done > a.done) ? -1 : 0)),
    );

    return (
      <div className="todo">
        <Input
          inputValue={inputValue}
          onChange={this.handleInputChange}
          onSubmit={this.addTask}
        />
        <Counter
          doing={tasksInProgress}
        />
        <Tasks
          tasks={sortedTasks}
          checkingTask={this.handleCheckingTask}
        />
      </div>
    );
  }
}

// == Export
export default Todo;

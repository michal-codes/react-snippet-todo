import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    return (
      <div>{this.props.todos.map(todo => <Todo key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo} />)}</div>
    )
  }
}

Todos.propType = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos


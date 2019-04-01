import React, { Component } from 'react'
import PropTypes from 'prop-types'



class Todo extends Component {
  todoStyle = () => ({
    background: '#f4f4f4',
    padding: '15px 15px',
    margin: '0px',
    borderBottom: '2px solid #fff',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none',
  })


  render() {
    const { title, id } = this.props.todo

    const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      outline: "none",
      border: 'none',
      borderRadius: '50%',
      padding: '5px 8px',
      float: 'right',
      cursor: 'pointer'
    }

    return (
      <React.Fragment>
        <p style={this.todoStyle()}>
          <input onChange={this.props.toggleComplete.bind(this, id)} style={{ marginRight: '15px' }} type="checkbox" />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </React.Fragment>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todo
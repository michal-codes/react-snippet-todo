import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
  state = { title: '' }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >
          <input onChange={this.onChange} value={this.state.title} name="title" style={{ flex: '9', fontFamily: 'sans-serif', fontSize: '1.2rem', outline: 'none', paddingLeft: '15px' }} type="text" placeholder="Add Todo..." />
          <input style={{ flex: '1' }} className='btn' type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo

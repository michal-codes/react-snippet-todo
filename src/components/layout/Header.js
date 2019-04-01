import React from 'react'
import { Link } from 'react-router-dom'

const headerStyle = {
  textAlign: 'center',
  background: '#333',
  color: '#fff',
  margin: '0',
  padding: '10px 0 10px 0'
}

const linkStyle = {
  textDecoration: 'none',
  color: '#fff'
}


function Header() {
  return (
    <div>
      <div style={headerStyle}>
        <h1 >TODOS app</h1>
        <p><Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link></p>
      </div>
    </div >
  )
}

export default Header

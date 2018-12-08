import React from 'react'

export default ({ children, thumb, title, text, technique }) => (
  <div className="card">
    <div className="card-image">{children}</div>
    <div className="card-content">
      <p className="title is-4">{title}</p>
    </div>
  </div>
)

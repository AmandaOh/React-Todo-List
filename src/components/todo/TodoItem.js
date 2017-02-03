import React from 'react'

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete}/>Learn {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}

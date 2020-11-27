import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({name, favoriteNumber, children}) => {
  return (
    <div>
      Hello, this is {name}.<br/>
      children is {children}.<br/>
      Favorate Number is {favoriteNumber}.
    </div>
  )
}

MyComponent.defaultProps = {
  name: 'ES6'
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent
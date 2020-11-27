import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MyClassComponent extends Component {
  render() {
    const {name, favoriteNumber, children} = this.props
    return (
      <div>
        Hello, I'm {name}.<br/>
        children is {children}.<br/>
        Favorate Number is {favoriteNumber}.
      </div>
    )
  }
}

MyClassComponent.defaultProps = {
  name: 'default name'
}

MyClassComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default MyClassComponent
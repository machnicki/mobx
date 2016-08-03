import React, { Component, PropTypes } from 'react'
import SmallCart from '../containers/small-cart'

class Header extends Component {
  render() {
    const { onPageChange } = this.props

    return (
      <header>
        <nav>
          <ul>
            <li><a href="#" onClick={ onPageChange.bind(null, 'index') }>Products list</a></li>
            <li><a href="#" onClick={ onPageChange.bind(null, 'basket') }>My basket</a></li>
          </ul>
        </nav>
        <SmallCart />
      </header>
    )
  }
}

Header.defaultProps = {
  onPageChange: () => null,
}

Header.propTypes = {
  onPageChange: PropTypes.func,
}

export default Header

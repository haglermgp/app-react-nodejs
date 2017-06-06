import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'
import styles from './sass/material.sass'

class Foo extends Component {
  constructor(props) {
    super(props)
    console.log("FOO", "constructor")
  }

  render() {
    return (
      <div>
        <div className="styless">I am Foo!</div>
        <Link to="/foo/home">Foo/home</Link>
      </div>
    )
  }
}

Foo.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Foo

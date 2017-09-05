import React, { PropTypes, Component } from 'react';
import NavBar from '../common/Navbar';

class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;

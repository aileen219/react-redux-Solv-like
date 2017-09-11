import React, { PropTypes, Component } from 'react';
import NavBar from '../common/Navbar';

class Layout extends Component {
  render() {
    const { location } = this.props.children;
    return (
      <div className="container-fluid">
        <NavBar location={location}/>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;

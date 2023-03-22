import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    backround: 'green',
    color: 'white',
    justifyContent: 'flex-end'
  }

}

// In Navbar, we can assign a style from an object by using curly braces



function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles.header} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;

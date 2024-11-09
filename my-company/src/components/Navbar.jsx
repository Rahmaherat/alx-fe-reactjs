import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/services" style={styles.navLink}>Services</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-between',  // This aligns the items horizontally with space between
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  }
};

export default Navbar;


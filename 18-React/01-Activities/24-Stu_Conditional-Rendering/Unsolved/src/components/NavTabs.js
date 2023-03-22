import React from 'react';

// We are using object destructuring syntax to extract the `currentPage` and `handlePageChange` key value pairs from the `props` object passed as an argument to this functional component.
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a ternary operator, which is checking if `currentPage` is equal to 'Home'. 
          // If it is, it applies the 'active' CSS class to the link, indicating that it is the currently active page.
          // If it is not, it applies the 'nav-link' CSS class, indicating that it is an inactive link.
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is another ternary operator, which is checking if `currentPage` is equal to 'About'. 
          // If it is, it applies the 'active' CSS class to the link, indicating that it is the currently active page.
          // If it is not, it applies the 'nav-link' CSS class, indicating that it is an inactive link.
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          // This is also a ternary operator, which is checking if `currentPage` is equal to 'Blog'. 
          // If it is, it applies the 'active' CSS class to the link, indicating that it is the currently active page.
          // If it is not, it applies the 'nav-link' CSS class, indicating that it is an inactive link.
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // This is yet another ternary operator, which is checking if `currentPage` is equal to 'Contact'. 
          // If it is, it applies the 'active' CSS class to the link, indicating that it is the currently active page.
          // If it is not, it applies the 'nav-link' CSS class, indicating that it is an inactive link.
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;


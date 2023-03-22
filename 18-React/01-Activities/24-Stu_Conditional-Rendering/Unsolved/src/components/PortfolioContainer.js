import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method returns the appropriate child component based on the current value of the `currentPage` state variable.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  // This method updates the `currentPage` state variable when the user clicks on a different page.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing two props to the `NavTabs` component: `currentPage` and `handlePageChange`. 
      `currentPage` is the current value of the `currentPage` state variable, which the `NavTabs` component uses to display the active page.
      `handlePageChange` is a callback function that is called when the user clicks on a different page. */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* The `renderPage` method is called here to render the appropriate child component based on the current value of the `currentPage` state variable. */}
      {renderPage()}
    </div>
  );
}

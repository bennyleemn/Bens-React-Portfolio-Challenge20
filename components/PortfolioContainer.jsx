import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Use the current page state to conditionally return the component for the selected page
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* 
      currentPage (prop) 
      {currentPage} (expression) 
      handlePageChange (prop) 
      {handlePageChange} (expression) 
      */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* 
      Use render page to return the component and react is rendering it
      */}
      <main className="mx-3">{renderPage()}</main>
      <Footer>*TBD</Footer>
    </div>
  );
}

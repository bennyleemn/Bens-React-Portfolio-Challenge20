// Destructure the object that contains the props and set it to local variables
function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            /* 
            Ternary operator, checking for which page is active
            */
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            // Using the handlePageChange hook to update the state of the currentPage
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            /* 
            Ternary operator, checking for which page is active
            */
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            /* 
            Ternary operator, checking for which page is active
            */
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  
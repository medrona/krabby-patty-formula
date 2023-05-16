import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Page2 from './Page2';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;














// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import Home from './Home';
// import Page2 from './Page2';

// const App = () => {
//   const navigate = useNavigate();

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home navigate={navigate} />} />
//         <Route path="/page2" element={<Page2 navigate={navigate} />} />
//       </Routes>
//     </Router>
//   );

  
//   const [currentPage, setCurrentPage] = useState('home');

//   const goToPage2 = () => {
//     setCurrentPage('page2');
//   };

//   const goBackToHome = () => {
//     setCurrentPage('home');
//   };

//   return (
//     <div>
//       {currentPage === 'home' && <Home goToPage2={goToPage2} />}
//       {currentPage === 'page2' && <Page2 goBackToHome={goBackToHome} />}
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import Home from './Home';
// import Page2 from './Page2';

// const App = () => {
//   const navigate = useNavigate();

//   const goToPage2 = () => {
//     navigate('/page2');
//   };

//   const goBackToHome = () => {
//     navigate('/');
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home goToPage2={goToPage2} />} />
//         <Route path="/page2" element={<Page2 goBackToHome={goBackToHome} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



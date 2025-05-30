// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/home/home';
// import About from './pages/about/about';
// import Nav from './layouts/nav';
// import Projets from './pages/projects/projets';
// import Contact from './pages/contact/contact';



// const App = () => {
//   return (
//     <>
     
//      <Nav/>
//      <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/projects" element={<Projets />} />
//       <Route path="/Contact" element={<Contact />} />
     
//      </Routes>
     
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import Nav from './layouts/nav';
import Home from './pages/home/home';
import Loading from './components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Nav />
      <Home />
    </>
  );
};

export default App;

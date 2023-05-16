// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Bottle from './Bottle.js';



// const Page2 = ({ goBackToHome }) => {
//   const navigate = useNavigate();

//   const handleGoBackToHome = () => {
//     navigate('/');
//   };

//   return (
//     <div>
//       <h1>Page 2</h1>
//       <button onClick={handleGoBackToHome}>Go back to Home</button>
//     </div>
//   );




// };


// export default Page2;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bottle from './Bottle.js';

const Page2 = ({ goBackToHome }) => {
  const navigate = useNavigate();

  const [clickCount, setClickCount] = useState(0);
  const maxClicks = 10;
  const maxPattyClicks = 20;

  const revealFormula = () => {
    if (clickCount < maxClicks) {
      setClickCount(clickCount + 1);
      console.log("Click count: " + clickCount);
    } else if (clickCount < maxPattyClicks) {
      setClickCount(clickCount + 1);
      console.log("Click count: " + clickCount);
    } else {
      console.log("Congratulations! You deserve the secret ingredient list!");
    }
  };

  const handleGoBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Would you like access to the Krabby Patty secret formula?</h1>
      <button onClick={handleGoBackToHome}>Go back to Home</button>
      <div className="container">
        <button onClick={revealFormula}>Click to break bottle!</button>
        <div className="bottle-container">
          <Bottle clickCount={clickCount} maxClicks={maxClicks} maxPattyClicks={maxPattyClicks} />
        </div>
      </div>
    </div>
  );
};

export default Page2;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleGoToPage2 = () => {
    if (isChecked) {
      navigate('/page2');
    } else {
      console.log("Please confirm that you are not Plankton.");
    }
  };

  return (
    <div className="centered-container">
      <h1>Welcome to Krusty Krabs!</h1>
      <div className="checkbox-container">
        <label className={`checkbox-label ${isChecked ? 'checked' : ''}`}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className="checkmark"></span>
          <span className="checkbox-text">I am not Plankton</span>
        </label>
      </div>
      <button className="centered-button" onClick={handleGoToPage2}>Proceed</button>
    </div>
  );
};

export default Home;






// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//     const navigate = useNavigate();
  
//     const goToPage2 = () => {
//       navigate('/page2');
//     };
  
//     // Rest of the component code
  
//     return (
//       <div>
//         {/* Component JSX */}
//         <button onClick={goToPage2}>Go to Page 2</button>
//       </div>
//     );
//   };
  










// const Home = ({ goToPage2 }) => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={goToPage2}>Go to Page 2</button>
//     </div>
//   );
// };

// export default Home;

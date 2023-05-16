import React from 'react';
import bottleImage from './images/bottle.png';
import formulaImage from './images/formula.png';


const Bottle = ({ clickCount, maxClicks, maxPattyClicks }) => {
    const bottleImageToShow = clickCount >= maxClicks ? formulaImage : bottleImage;
    const ingredients = ['Bun', 'Patty', 'Cheese', 'Lettuce', 'Pickles', 'Tomato', 'Bun']
    const pattyComponents = ['Flour', 'Barnacles Shavings', 'Salt', 'Turmeric', 'Love', 'The "secret sauce"', 'Chum'];
    

    return (
      <div className="bottle">
        <img src={bottleImageToShow} alt="Bottle" />
        {clickCount >= maxClicks && clickCount < maxPattyClicks && (
        <div className="ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
      {clickCount >= maxPattyClicks && (
        <div className="patty-components">
          <h3>Patty Components:</h3>
          <ul>
            {pattyComponents.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
    );
  };
  
  
  export default Bottle;
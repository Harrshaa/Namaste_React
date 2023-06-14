import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element
const heading=React.createElement("h1",{id:"heading"},"Namaste React");
const jsxheading=<h1 id='headingjsx'>NAMASTE REACT from JSX </h1> // REACT ELEMENT//


//JSX (transpiled before it reaches the JS ENGINE) - PARCEL -BABEL
//ITS BABEL'S JOB TO CONVERT THE CODE THAT REACT/JS ENGINE CAN UNDERSTAND
//JSX => React.createElement => ReactElement-JS Object => HTML Element (render)
//who is converting JSX => React.createElement() ===>>> BABEL




//React Functional Component
const Title=()=> <h1>Laying the Foundation</h1>
const number=1000;
const element=<h2>{number} Put element inside of component</h2>



//Component Composition ->  component inside a componennt// 
const HeadingComponent=()=>(
    <div id='container'>
        {element}
        {number}
        <Title />       
        <h1 className='funcHeading'>Namaste React Functional Component</h1>
    </div>     
)// Whatever inside this braces will be returned//

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


//React Fragment//

const FragmentComp =()=>(
    <React.Fragment>
    <div id='container'>
        <Title />
    </div>
    <h3>Fragment Component</h3>
    <div id='container2'></div>
    </React.Fragment>
);

root.render(<FragmentComp />);
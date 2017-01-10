import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyB4UgibWad5vXudv4h-uGcPInzNk_5u5Nc';

//create a new component. THis component should produce some HTML
const App = () => {
  return (
    <div>Hi!</div>
  );
}

//Take this component's generated HTML and put it on the page
//(In the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

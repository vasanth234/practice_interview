/*import React, { useState, useEffect } from 'react';
import './App.css'
const App = () => {
  // Define state using useState hook
  const [toggle, setToggle] = useState('red');

  // useEffect hook to handle traffic light timing transitions
  useEffect(() => {
    // Function to transition to the next traffic light color after a specified duration
    const timer = setTimeout(() => {
      switch (toggle) {
        case 'red':
          setToggle('yellow');
          break;
        case 'yellow':
          setToggle('green');
          break;
        case 'green':
          setToggle('red');
          break;
        default:
          break;
      }
    }, getDuration(toggle)); // Call getDuration function to get duration for current color

    // Cleanup function to clear the timer when component unmounts or state changes
    return () => clearTimeout(timer);
  }, [toggle]); // useEffect depends on toggle state, so it runs whenever toggle changes

  // Function to return duration in milliseconds based on current traffic light color
  const getDuration = (color) => {
    switch (color) {
      case 'red':
        return 4000; // 4000 milliseconds for red light
      case 'yellow':
        return 3000; // 3000 milliseconds for yellow light
      case 'green':
        return 2000; // 2000 milliseconds for green light
      default:
        return 0; // Default case returns 0 milliseconds (shouldn't happen)
    }
  };*/

  // JSX to render the traffic light simulation
 /* return (
    <div className='traffic'>
      {/* Traffic light divs with dynamic class based on current traffic light color 
      <div className={`red ${toggle === 'red' ? 'active' : ''}`}>Red</div>
      <div className={`yellow ${toggle === 'yellow' ? 'active' : ''}`}>Yellow</div>
      <div className={`green ${toggle === 'green' ? 'active' : ''}`}>Green</div>
    </div>
  );
};

export default App;*/
/*import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure App.css is imported correctly

const App = () => {
  const arr = [1, 2, 3, 4, 5]; // Array of data for rendering circles
  const [demo, setDemo] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDemo(demo + 1); // Increment demo state value after 2000ms (2 seconds)
    }, 2000);

    return () => clearTimeout(timer); // Cleanup function to clear timer on component unmount
  }, [demo]); // Dependency on demo state ensures effect runs whenever demo changes

  return (
    <div className='circles'>
      {arr.map((item, index) => (
        <div key={index} className={`cir ${index < demo ? 'active' : ''}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default App;*/

/*import React from 'react'

const App = () => {
  const[count,setCount]=useState(0);


const handleclick=()=>{
  setCount(count+1);
  setTimeout(()=>{
    alert(count);
  },3000)
}
  return (
    <div>
      <button onClick={handleclick}>Click</button>
      {count}
    </div>
  )
}

export default App*/

/*import React from 'react'
import {useState} from 'react'
const App = () => {
  const [data,setdata]=useState(0)
  function handle(){
   setdata(data+1)
    setTimeout(()=>{
      
    
      
      console.log(data);
    },5000)
  }
  return (
    <div>
      <button onClick={handle}>Click</button>
      {
        data
      }
    </div>
  )
}

export default App*/

/*import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  const handle = () => {
    // Increment data by 1 when button is clicked
    setData(data + 1);

    // Clear any existing timeout
    clearTimeout(timeoutId);

    // Set a new timeout to log the current state of data after 5000ms (5 seconds)
    const id = setTimeout(() => {
      console.log(data); // This will log the current value of data after 5 seconds
    }, 5000);

    // Save the timeout ID for potential cleanup
    setTimeoutId(id);
  };

  // Cleanup function to clear timeout if component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div>
      <button onClick={handle}>Click</button>
      {data}
    </div>
  );
};

export default App;*/

// Example of setInterval
/*let count = 0;
const intervalID = setInterval(() => {
    console.log(count);
    count++;
    if (count > 10) {
        clearInterval(intervalID); // Stops the interval after count reaches 10
    }
}, 1000); // Prints count every second (1000 milliseconds)*/

/*import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [timeId, setTimeId] = useState(null); // State to hold the timeout ID

  function handle() {
    setCount(count + 1);
    const id = setTimeout(() => {
      console.log(count); // This will log the current count after 4 seconds
    }, 4000);
    setTimeId(id); // Store the timeout ID in state
  }

  useEffect(() => {
    // Clear the timeout if count exceeds 6
    if (count > 6) {
      clearTimeout(timeId); // Clear the timeout based on the stored ID
    }
    // Cleanup the timeout when component unmounts or when count changes
    return () => {
      clearTimeout(timeId);
    };
  }, [count]); // Include timeId in the dependency array

  return (
    <div>
      <button onClick={handle}>Click</button>
      {count}
    </div>
  );
};

export default App;*/

/*import React from 'react'
import {useState} from 'react'
const App = () => {
  const [count, setCount] = useState(0);
  const [timeId, setTimeId] = useState(null); // State to hold the timeout ID

  function handle() {

    clearTimeout(timeId);
    setCount(count + 1);
    const id = setTimeout(() => {
      console.log(count); // This will log the current count after 4 seconds
    }, 4000);
    setTimeId(id); // Store the timeout ID in state
  }
  return (
    <div>
      <button onClick={handle}>click</button>
    </div>
  )
}

export default App*/

// Define a function to update the counter
/*function updateCounter() {
  // Initialize a counter variable
  let count = 0;

  // Display the initial count
  console.log("Count:", count);

  // Set an interval that increments the count every second
  const intervalId = setInterval(() => {
    count++;
    console.log("Count:", count); // Display the updated count
  }, 1000); // Interval set to 1000 milliseconds (1 second)

  // Return the interval ID in case we need to clear it later
  return intervalId;
}

// Call the function to start the interval
const id = updateCounter();
setTimeout(()=>{
  clearInterval(id);

},10000)
// Example of how to stop the interval after 5 seconds*/
/*function example() {
  console.log(myVar); // undefined
  var myVar = 10;
  console.log(myVar); // 10
}

example();*/
/*sayHi();
function sayHi (){
  console.log('rg')
}*/

/*function example() {
  console.log(myVar); // undefined
  var myVar = 10;
  console.log(myVar); // 10
}

example();*/

/*var a=null;
console.log(typeof (a));*/

/*import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function HoverHighlight() {
    const [showText, setShowText] = useState(false);

    return (
        <div className="hover-container">
            <h2
                className="hover-title"
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
            >
                Hover over me!
            </h2>
            {showText && (
                <p className="hover-text">
                    This text appears when you hover over the title.
                </p>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>Hover Highlight Example</h1>
            <HoverHighlight />
        </div>
    );
}

export default App;*/


/*import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Example of generating suggestions based on input
    const suggestedItems = [
      'React',
      'Redux',
      'Next.js',
      'Material-UI',
      'GraphQL',
      'TypeScript',
      'Node.js',
      'Express.js'
    ].filter(item => item.toLowerCase().includes(value.toLowerCase()));

    setSuggestions(suggestedItems);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  return (
    <div className="App">
      <h1>Search Bar with Suggestions Example</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Type to search..."
        />
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;*/

























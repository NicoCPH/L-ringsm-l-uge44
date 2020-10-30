import React, { useState } from "react";

function SettimeAndDate() {
    const [time, setTime] = useState();
    return (
      <div>
        <p>The time is {time === NaN ? "" : time}</p>
        <button onClick={() => setTime(new Date().toLocaleTimeString())}>
          Click me
        </button>
      </div>
    );
  }



  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: 0,
      };
    }
  
    render() {
      return (
        <div>
          <p>time is {this.state.time}</p>
          <button
            onClick={() =>
              this.setState({ time: new Date().toLocaleTimeString() })
            }
          >
            Click me
          </button>
        </div>
      );
    }
  }

  function App5() {
   
    return(
    <div>
   
    <SettimeAndDate/>
   
    </div>
    )
    }



export default App5;
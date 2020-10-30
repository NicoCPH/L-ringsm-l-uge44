import React, { useState, useEffect } from 'react';

function UseEffecteks() {
const defaultcount = 0;
  const [count, setCount] = useState(defaultcount);



  useEffect(() => {
      //opdatere hver gang at count bliver ændret
      console.log(`You clicked ${count} times`);
  }, [count]);



  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
function App3() {
    const [showText,hideText]=useState(false);
    const[add,minus]=useState(true);
    return(
    <div>
    <button className='plus' onClick={()=>{hideText(!showText);minus(!add)}}>{add? 'ShowDetails':'HideDetails'}</button>
    {showText&&
    <div >
   <UseEffecteks/>
    </div>
    }
    </div>
    )
    }



export default App3;
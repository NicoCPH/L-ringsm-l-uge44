

import React, { useState } from "react";

function PersonsList(props) {
    const persons = props.persons;
    const listItems = persons.map((person) =>
      <li key={person.toString()}>
        {person}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const persons = ["jannie", "pede", "sophie"];

  function App5() {
    const [showText,hideText]=useState(false);
    const[add,minus]=useState(true);
    return(
    <div>
    <button className='plus' onClick={()=>{hideText(!showText);minus(!add)}}>{add? 'ShowDetails':'HideDetails'}</button>
    {showText&&
    <div >
    <PersonsList persons={persons}/>
    </div>
    }
    </div>
    )
    }



export default App5;
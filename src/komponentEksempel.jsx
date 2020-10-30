
import React, { useState } from "react";

export default function Welcome(props) {
    const [showText,hideText]=useState(false);
    const[add,minus]=useState(true);
    return(
    <div>
    <button className='plus' onClick={()=>{hideText(!showText);minus(!add)}}>{add? 'ShowDetails':'HideDetails'}</button>
    {showText&&
    <div >
    <p>Hello, {props.name}</p>
    </div>
    }
    </div>
    )
  }
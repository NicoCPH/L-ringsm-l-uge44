import React, {useState} from "react";
const NameForm = () => {
    const initialState = {name : ""};


  const [name,setName] = useState(initialState);
  function handleChange(event) {    
      const target = event.target;
      const id = target.id;
      const value = target.value;
      setName({...name,[id]: value});

  }

  function handleSubmit(event) {
    event.preventDefault();
    window.alert(JSON.stringify(name));
    setName(initialState);
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
          <input type="text" id="name" value={name.name} placeholder="Name"  />
        <button>Submit</button>
      </form>
      {JSON.stringify(name)}
    </div>
  );
};
 
function App4() {
    const [showText,hideText]=useState(false);
    const[add,minus]=useState(true);
    return(
    <div>
    <button className='plus' onClick={()=>{hideText(!showText);minus(!add)}}>{add? 'ShowDetails':'HideDetails'}</button>
    {showText&&
    <div >
   <NameForm/>
    </div>
    }
    </div>
    )
    }



export default App4;
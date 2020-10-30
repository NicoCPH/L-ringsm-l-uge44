
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
  
    return(
    <div>
   
    <PersonsList persons={persons}/>
   
    </div>
    )
    }



export default App5;
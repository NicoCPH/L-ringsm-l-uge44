import logo from './logo.svg';
import './App.css';
import Komponent from './komponentEksempel'
import SettimeAndDate from './stateEksempel'
import UseEffectEksempel from './useEffectEksempel'
import Persons from './ListsogKeysEksempel'
import Form from './formEksempel'
import LiftUp from './liftingUpStateEksempel'




function App() {    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1>Komponent Eksempel</h1>
        <Komponent name={"Komponent"}/>
        <h1>UseState Eksempel</h1>
        <SettimeAndDate />
        <h1>UseEffect Eksempel</h1>
        <UseEffectEksempel/>
        <h1>Liste og Keys Eksempel</h1>
        <Persons/>
        <h1>Form Eksempel</h1>
        <Form/>
        <h1>Lifting up Eksempel</h1>
        <LiftUp/>
        
      </header>
    </div>
);
}
export default App;

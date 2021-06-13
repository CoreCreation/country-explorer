import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ContinentTable } from './components/ContinentTable';
import { CountryTable } from './components/CountryTable';

//The app always needs to draw the Continent Table
//It only draws the Country Table when there is a route to the table 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Continents</h1>
      </header>
      <ContinentTable />

      <Switch>
        <Route path="/:code" children={<CountryTable />} />
      </Switch>
    </div>
  );
}

export default App;

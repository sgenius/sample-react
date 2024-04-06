import logo from './logo.svg';
import Title from './Title';
import './App.css';
import ClickCounter from './ClickCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title textColor="yellow" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ClickCounter />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Movie from './movies/Movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ backgroundColor: "red" }}>
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

      <Movie />

      <input type="text" id="username"></input>
      <label htmlFor="username"></label>
    </div>
  );
}

export default App;

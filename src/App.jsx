import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import NavComponent from './components/NavComponent';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      <NavComponent></NavComponent>
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
        <ButtonComponent/>
        <ImageComponent></ImageComponent>
        

      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/Js/Static/NavBar/NavBar';
import { AppRouter } from './Components/Js/Router/Router';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;

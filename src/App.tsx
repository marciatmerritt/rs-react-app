import './App.css';
import NavBar from './components/navbar/Navbar';
import Input from './components/input/Input';
import Button from './components/button/Button';

function App() {
  return (
    <>
      <NavBar>
        <Input type="text" className="search-input" placeholder="Search" />
        <Button className="search-button">SEARCH</Button>
      </NavBar>
    </>
  );
}

export default App;

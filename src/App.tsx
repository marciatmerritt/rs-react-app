import Button from './components/button/Button';
import Input from './components/input/Input';
import NavBar from './components/navbar/Navbar';
import Results from './components/results/Results';

import './App.css';

function App() {
	return (
		<div className='container'>
			<NavBar>
				<Input type='text' className='search-input' placeholder='Search' />
				<Button className='search-button'>SEARCH</Button>
			</NavBar>
			<div className='main'>
				<Results />
			</div>
		</div>
	);
}

export default App;

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'

function App() {
	return (
		<BrowserRouter>
			<header>
				<Link to='/'>#VANLIFE</Link>
				<nav>
					<Link to='/about'>About</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

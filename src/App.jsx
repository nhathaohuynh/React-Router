import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HostLayout from './components/HostLayout.jsx'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Host/Dashboard.jsx'
import HostInfo from './pages/Host/HostInfo.jsx'
import HostVanDetail from './pages/Host/HostVanDetail.jsx'
import HostVanPhoto from './pages/Host/HostVanPhoto.jsx'
import HostVanPricing from './pages/Host/HostVanPricing.jsx'
import HostVans from './pages/Host/HostVans.jsx'
import Income from './pages/Host/Income.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import Van from './pages/Van.jsx'
import VanDetail from './pages/VanDetail.jsx'
import './server'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='vans' element={<Van />} />
					<Route path='vans/:id' element={<VanDetail />} />
					<Route path='host' element={<HostLayout />}>
						<Route index element={<Dashboard />} />
						<Route path='income' element={<Income />} />
						<Route path='vans' element={<HostVans />} />
						<Route path='reviews' element={<Reviews />} />
						<Route path='vans/:id' element={<HostVanDetail />}>
							<Route index element={<HostInfo />} />
							<Route path='pricing' element={<HostVanPricing />} />
							<Route path='photos' element={<HostVanPhoto />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

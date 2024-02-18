import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	const activeStyle = {
		fontWeight: 'bold',
		textDecoration: 'underline',
		color: '#161616',
	}
	return (
		<header>
			<NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to='/'>
				#VANLIFE
			</NavLink>
			<nav>
				<NavLink
					style={({ isActive }) => (isActive ? activeStyle : null)}
					to='/host'
				>
					Host
				</NavLink>

				<NavLink
					style={({ isActive }) => (isActive ? activeStyle : null)}
					to='/vans'
				>
					Vans
				</NavLink>
				<NavLink
					style={({ isActive }) => (isActive ? activeStyle : null)}
					to='/about'
				>
					About
				</NavLink>
			</nav>
		</header>
	)
}

export default Header

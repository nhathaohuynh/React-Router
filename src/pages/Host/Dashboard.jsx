import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
	return (
		<>
			<h1>This is Dashboard</h1>
			<Outlet />
		</>
	)
}

export default Dashboard

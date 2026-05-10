import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function ProtectedRoute({ children }) {
	const token = localStorage.getItem('token');

	return token ? children : <Navigate to="/signin" />;
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/signin" element={<Signin />} />

				<Route path="/signup" element={<Signup />} />

				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
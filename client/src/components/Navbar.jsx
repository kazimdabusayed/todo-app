import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar() {
	const navigate = useNavigate();

	const handleLogout = () => {
		const confirmLogout = window.confirm('Are you sure you want to logout?');

		if (!confirmLogout) return;

		localStorage.removeItem('token');

		toast.success('Logged out successfully');

		navigate('/login');
	};

	return (
		<div className="w-full fixed top-0 left-0 z-50">
			<div className="bg-white/10 backdrop-blur-xl border-b border-white/20 px-6 py-4 flex justify-between items-center">
				<Link to="/dashboard">
					<h1 className="text-white font-bold text-xl">TodoApp</h1>
				</Link>

				<div className="flex items-center gap-4">
					<Link to="/dashboard" className="text-gray-200 hover:text-white">
						Dashboard
					</Link>

					<button
						onClick={handleLogout}
						className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

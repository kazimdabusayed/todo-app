import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';

function Signup() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();

		try {
			await API.post('/auth/signup', {
				name,
				email,
				password,
			});

			alert('Signup successful');
			navigate('/login');
		} catch (err) {
			alert('Signup failed');
			console.log(err);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center">
			<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-2xl w-[400px]">
				<h1 className="text-3xl font-bold text-white text-center mb-6">
					Create Account
				</h1>

				<form onSubmit={handleSignup} className="flex flex-col gap-4">
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none"
					/>

					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none"
					/>

					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 outline-none"
					/>

					<button
						type="submit"
						className="bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg transition"
					>
						Sign Up
					</button>
				</form>

				<p className="text-gray-300 text-center mt-5">
					Already have an account?{' '}
					<Link to="/login" className="text-indigo-400">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Signup;

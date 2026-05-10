import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
			<div className="bg-white p-10 rounded-2xl shadow-xl text-center w-[400px]">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">OneTask</h1>

				<p className="text-gray-600 mb-8">
					Plan your day, complete your tasks with ease.
				</p>

				<div className="flex flex-col gap-4">
					<Link to="/signin">
						<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
							Sign In
						</button>
					</Link>

					<Link to="/signup">
						<button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;

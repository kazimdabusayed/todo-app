import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import API from '../services/api';

function Dashboard() {
	const [todos, setTodos] = useState([]);
	const [title, setTitle] = useState('');

	// edit state
	const [editId, setEditId] = useState(null);
	const [editText, setEditText] = useState('');

	// fetch todos
	const fetchTodos = async () => {
		try {
			const res = await API.get('/todos');
			setTodos(res.data);
		} catch (err) {
			toast.error('Failed to load todos');
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);


	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white pt-20">
			<Navbar />

			<div className="max-w-2xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-6 text-center">
					My Todo Dashboard
				</h1>

				{/* Add Todo */}
				<div className="flex gap-2 mb-6">
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter todo..."
						className="flex-1 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none"
					/>

					<button
						className="bg-indigo-500 hover:bg-indigo-600 px-6 rounded-lg"
					>
						Add
					</button>
				</div>

				{/* Todo List */}
				<div className="space-y-3">
					{todos.map((todo) => (
						<div
							key={todo.id}
							className="flex justify-between items-center p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md"
						>
							<div className="flex items-center gap-3 flex-1">
								{/* Checkbox */}
								<input
									type="checkbox"
									checked={todo.completed}
									className="w-4.5 h-4.5 accent-indigo-500 cursor-pointer flex-shrink-0"
								/>
								{editId === todo.id ? (
									<div className="flex gap-2 flex-1">
										<input
											value={editText}
											onChange={(e) => setEditText(e.target.value)}
											className="flex-1 p-2 rounded bg-white/10 border border-white/20 outline-none"
										/>
										<button
											className="bg-green-500 px-3 py-1 rounded"
										>
											Save
										</button>
									</div>
								) : (
									<span
										className={
											todo.completed
												? 'line-through text-gray-400'
												: 'text-white'
										}
									>
										{todo.title}
									</span>
								)}
							</div>

							{/* Buttons */}
							<div className="flex gap-2 ml-4">
								<button
									className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
								>
									Edit
								</button>

								<button
									className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
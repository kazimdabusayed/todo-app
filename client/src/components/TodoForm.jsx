import { useState } from 'react';

function TodoForm({ addTodo }) {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title) return;

		addTodo(title);
		setTitle('');
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-2 mb-4">
			<input
				type="text"
				placeholder="Enter todo..."
				className="border p-2 flex-1 rounded"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<button className="bg-blue-600 text-white px-4 rounded">Add</button>
		</form>
	);
}

export default TodoForm;

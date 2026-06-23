function TodoItem({ todo, deleteTodo, toggleTodo }) {
	return (
		<div className="flex justify-between items-center bg-white p-3 rounded shadow mb-2">
			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => toggleTodo(todo.id)}
				/>

				<p className={todo.completed ? 'line-through text-gray-500' : ''}>
					{todo.title}
				</p>
			</div>

			<button
				onClick={() => deleteTodo(todo.id)}
				className="bg-red-500 text-white px-3 py-1 rounded"
			>
				Delete
			</button>
		</div>
	);
}

export default TodoItem;

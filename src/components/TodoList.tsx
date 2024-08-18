import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
	const { todos, loading, error, page, limit } = useTypedSelector(
		(state) => state.todo
	);
	const pages = [1, 2, 3, 4, 5];
	const { fetchTodos, setTodoPage } = useActions();
	useEffect(() => {
		fetchTodos(page, limit);
	}, [page]);
	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id} style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
					{todo.id} - {todo.title}
				</div>
			))}
			<div style={{ display: "flex" }}>
				{pages.map((p) => (
					<div
						key={p}
						onClick={() => setTodoPage(p)}
						style={{
							padding: "0.5rem",
							border: p === page ? "1px solid blue" : "1px solid gray",
							cursor: "pointer",
						}}
					>
						{p}
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoList;

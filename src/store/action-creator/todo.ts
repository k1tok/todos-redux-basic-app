import axios from "axios";
import { Dispatch } from "redux";
import { TodoAction, todoActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			dispatch({ type: todoActionTypes.FETCH_TODOS });
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/todos",
				{
					params: { _page: page, _limit: limit },
				}
			);
			setTimeout(() => {
				dispatch({
					type: todoActionTypes.FETCH_TODOS_SUCCESS,
					payload: response.data,
				});
			}, 1000);
		} catch {
			dispatch({
				type: todoActionTypes.FETCH_TODOS_ERROR,
				payload: "Error fetching todos",
			});
		}
	};
};

export const setTodoPage = (page: number): TodoAction => {
	return { type: todoActionTypes.SET_TODO_PAGE, payload: page };
};

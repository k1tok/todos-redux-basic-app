export interface TodoState {
	todos: Array<{
		id: number;
		title: string;
	}>;
	loading: boolean;
	error: null | string;
	page: number;
	limit: number;
}

export enum todoActionTypes {
	FETCH_TODOS = "FETCH_TODOS",
	FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
	FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
	SET_TODO_PAGE = "SET_TODO_PAGE",
}
interface FetchTodosAction {
	type: todoActionTypes.FETCH_TODOS;
}
interface FetchTodosSuccessAction {
	type: todoActionTypes.FETCH_TODOS_SUCCESS;
	payload: [
		{
			id: number;
			title: string;
		},
	];
}
interface FetchTodosErrorAction {
	type: todoActionTypes.FETCH_TODOS_ERROR;
	payload: string;
}
interface SetTodoPageAction {
	type: todoActionTypes.SET_TODO_PAGE;
	payload: number;
}

export type TodoAction =
	| FetchTodosAction
	| FetchTodosSuccessAction
	| FetchTodosErrorAction
	| SetTodoPageAction;

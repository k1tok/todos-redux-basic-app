export interface UserState {
	users: Array<{ name: string; id: number }>;
	loading: boolean;
	error: null | string;
}
export enum UserActionTypes {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
interface FetchUsersAction {
	type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS;
	payload: Array<{ name: string; id: number }>;
}
interface FetchUsersErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string;
}
export type UserAction =
	| FetchUsersAction
	| FetchUsersSuccessAction
	| FetchUsersErrorAction;

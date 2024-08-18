import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
	const { users, loading, error } = useTypedSelector((state) => state.user);
	const { fetchUsers } = useActions();
	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{users.map((user) => (
				<div key={user.id} style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
					{user.name}
				</div>
			))}
		</div>
	);
};

export default UserList;

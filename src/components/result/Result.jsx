const Result = ({ user }) => {
	return (
		<div>
			<h1>USER</h1>
			<h2>
				name: <span>{user.name}</span>
			</h2>
			<h2>
				surname: <span>{user.surname}</span>
			</h2>
			<h2>{user.active ? 'Active' : 'Inactive'}</h2>
		</div>
	);
};
export default Result;

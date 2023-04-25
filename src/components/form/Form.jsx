const Form = ({ user, setUser }) => {
	return (
		<div>
			<div>
				<label htmlFor=''>name</label>
				<input
					type='text'
					name=''
					id=''
					onChange={e => putName(user, setUser, e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor=''>surname</label>
				<input
					type='text'
					name=''
					id=''
					onChange={e => putSurname(user, setUser, e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor=''>active</label>
				<input
					type='checkbox'
					name=''
					id=''
					onChange={e => putActive(user, setUser, e.target.checked)}
				/>
			</div>
		</div>
	);
};
// const putName = (user, setUser, newName) => {
// 	setUser({
// 		...user,
// 		name: newName
// 	});
// };
// const putSurname = (user, setUser, newSurName) => {
// 	setUser({
// 		...user,
// 		surname: newSurName
// 	});
// };
// const putActive = (user, setUser, isActive) => {
// 	if (isActive) {
// 		setUser({
// 			...user,
// 			active: 'active'
// 		});
// 	} else {
// 		setUser({
// 			...user,
// 			active: 'inactive'
// 		});
// 	}
// };
export default Form;

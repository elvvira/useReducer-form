import { ACTIONS_USER } from '../../actions/actions-user';

const Form = ({ dispatch }) => {
	return (
		<div>
			<div>
				<label htmlFor=''>name</label>
				<input
					type='text'
					name=''
					id=''
					onChange={e =>
						dispatch({
							type: ACTIONS_USER.NAME,
							payload: e.target.value
						})
					}
				/>
			</div>
			<div>
				<label htmlFor=''>surname</label>
				<input
					type='text'
					name=''
					id=''
					onChange={e =>
						dispatch({
							type: ACTIONS_USER.SURNAME,
							payload: e.target.value
						})
					}
				/>
			</div>
			<div>
				<label htmlFor=''>active</label>
				<input
					type='checkbox'
					name=''
					id=''
					onChange={e =>
						dispatch({
							type: ACTIONS_USER.ACTIVE,
							payload: e.target.checked
						})
					}
				/>
			</div>
		</div>
	);
};

export default Form;

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

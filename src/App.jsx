import { useReducer } from 'react';
import Form from './components/form/Form';
import Result from './components/result/Result';
import { userReducer } from './reducers/userReducer';

const App = () => {
	const [user, dispatch] = useReducer(userReducer, {
		name: '',
		surname: '',
		active: false
	});
	return (
		<div>
			<Form dispatch={dispatch} />
			<Result user={user} />
		</div>
	);
};

export default App;

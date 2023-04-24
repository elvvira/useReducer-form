import { useState } from 'react';
import Form from './components/form/Form';
import Result from './components/result/Result';

const App = () => {
	const [user, setUser] = useState({
		name: '',
		surname: '',
		active: true
	});
	return (
		<div>
			<Form user={user} setUser={setUser} />
			<Result user={user} setUser={setUser} />
		</div>
	);
};

export default App;

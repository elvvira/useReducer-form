import Form from './components/form/Form';
import Result from './components/result/Result';
import { useUser } from './hooks/useUser';

const App = () => {
	const [user, dispatch] = useUser();
	return (
		<div>
			<Form user={user} setUser={setUser} />
			<Result user={user} setUser={setUser} />
		</div>
	);
};

export default App;

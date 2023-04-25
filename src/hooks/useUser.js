import { useReducer } from 'react';

import { userReducer } from '../reducers/userReducer';

export const useUser = () => {
	const [counter, dispatch] = useReducer(userReducer, {
		name: '',
		surname: '',
		active: false
	});

	return { counter, dispatch };
};

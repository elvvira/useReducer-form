import { ACTIONS_USER } from '../actions/actions-user';

export const userReducer = (user, action) => {
	switch (action) {
		case ACTIONS_USER.NAME:
			return {
				...user,
				name: newName
			};
		case ACTIONS_USER.SURNAME:
			return {
				...user,
				surname: newSurName
			};
		case ACTIONS_USER.ACTIVE:
			return {
				...user,
				active: 'active'
			};

		default:
			throw new Error('Invalid action');
	}
};

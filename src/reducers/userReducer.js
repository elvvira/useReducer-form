import { ACTIONS_USER } from '../actions/actions-user';

export const userReducer = (user, { type, payload }) => {
	switch (type) {
		case ACTIONS_USER.NAME:
			return {
				...user,
				name: payload
			};
		case ACTIONS_USER.SURNAME:
			return {
				...user,
				surname: payload
			};
		case ACTIONS_USER.ACTIVE:
			return {
				...user,
				active: payload
			};

		default:
			throw new Error('Invalid action');
	}
};

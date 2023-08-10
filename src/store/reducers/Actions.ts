import axios from 'axios';
import { User } from 'models/User';
import { AppDispatch } from 'store/store';
import { usersSlice } from './UsersSlice';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(usersSlice.actions.usersFetching());
		const res = await axios.get<User[]>(
			'https://jsonplaceholder.typicode.com/users'
		);
		dispatch(usersSlice.actions.usersFetchingSuccess(res.data));
	} catch (error) {
		dispatch(usersSlice.actions.usersFetchingError(error.message));
	}
};

import { User } from 'models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
	users: User[];
	isLoading: boolean;
	isError: null | string;
}
const initialState: UsersState = {
	users: [],
	isLoading: false,
	isError: null,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		usersFetching(state) {
			state.isLoading = true;
			state.isError = null;
		},
		usersFetchingSuccess(state, action: PayloadAction<User[]>) {
			state.isLoading = false;
			state.isError = null;
			state.users = action.payload;
		},
		usersFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.isError = action.payload;
		},
	},
});

export default usersSlice.reducer;

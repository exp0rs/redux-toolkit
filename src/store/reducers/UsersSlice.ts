import { User } from 'models/User';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	users: User[];
	isLoading: boolean;
	isError: null | string;
}
const initialState: UserState = {
	users: [],
	isLoading: false,
	isError: null,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
});

export default usersSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducers/UsersSlice';

export const setupStore = () => {
	return configureStore({
		reducer: usersSlice,
	});
};

export type RootState = ReturnType<typeof usersSlice>;
export type SetupStore = ReturnType<typeof setupStore>;
export type AppDispatch = SetupStore['dispatch'];

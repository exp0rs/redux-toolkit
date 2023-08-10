import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect } from 'react';
import { fetchUsers } from 'store/reducers/Actions';

export const App = () => {
	const dispatch = useAppDispatch();
	const { isError, isLoading, users } = useAppSelector((state) => state);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div>
			{isLoading && <h1>...Loading...</h1>}
			{isError && <h1>Error:{isError}</h1>}
			{users &&
				users.map((user) => {
					return (
						<div key={user.id}>
							name:{user.name} email: {user.email}
						</div>
					);
				})}
		</div>
	);
};

import { App } from 'app';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

const store = setupStore();

const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

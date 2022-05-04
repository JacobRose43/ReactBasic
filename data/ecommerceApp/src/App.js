import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Nav from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Nav />}>
				<Route index element={<Home />} />
				{/* Display this as the Base Compontent  */}
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;

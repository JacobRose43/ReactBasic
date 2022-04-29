import { Routes, Route } from 'react-router-dom';

import Nav from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const Shop = () => {
	return <h1>Hello I'm The Shop Page!</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Nav />}>
				<Route index element={<Home />} />
				{/* Display this as the Base Compontent  */}
				<Route path='shop' element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;

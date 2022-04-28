import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';

const Shop = () => {
	return <h1>Hello I'm The Shop Page!</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/home' element={<Home />}>
				<Route path='/home/shop' element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Nav from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

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
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;

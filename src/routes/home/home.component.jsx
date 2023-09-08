import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
	return (
		<div>
			<Directory />
			<Outlet /> {/* Nested <Route path='shop'... /> from Home component */}
		</div>
	);
};

export default Home;

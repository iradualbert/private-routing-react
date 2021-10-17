import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<h1>Welcome</h1>
			<Link to="/profile">Profile Page</Link>
			<Link to="/signup">Sign up Page</Link>
		</>
	);
};

export default HomePage;

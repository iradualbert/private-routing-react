import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import { AuthRoute, PrivateRoute } from "./routes";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userData, setUserData] = useState(null);

	const handleSignup = (data) => {
		setUserData(data);
		setIsAuthenticated(true);
	};

	const handleLogout = () => {
		setIsAuthenticated(false);
		setUserData(null);
	};

	return (
		<Router>
			<div className="container">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<PrivateRoute
						isAuthenticated={isAuthenticated}
						exact
						path="/profile"
						render={(props) => (
							<ProfilePage
								handleLogout={handleLogout}
								userData={userData}
								{...props}
							/>
						)}
					/>
					<AuthRoute
						exact
						isAuthenticated={isAuthenticated}
						path="/signup"
						render={(props) => (
							<SignupPage handleSignup={handleSignup} {...props} />
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

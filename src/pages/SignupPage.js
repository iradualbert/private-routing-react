import { useState } from "react";

const SignupPage = ({ handleSignup }) => {
	const [fullname, setFullname] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		handleSignup({ fullname, username, email });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder="Full Name"
				required
				value={fullname}
				onChange={(e) => setFullname(e.target.value)}
			/>
			<input
				placeholder="Username"
				required
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				placeholder="Email"
				required
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				placeholder="Password"
				required
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit">Sign Up</button>
		</form>
	);
};

export default SignupPage;

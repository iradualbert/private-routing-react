const ProfilePage = ({ handleLogout, userData }) => {
	const { fullname, email, username } = userData;
	return (
		<div className="profile">
			<h1>Fullname: {fullname}</h1>
			<h2>Username: {username}</h2>
			<h3>Email: {email}</h3>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default ProfilePage;

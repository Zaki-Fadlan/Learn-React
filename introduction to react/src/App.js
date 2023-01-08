import Introduction from "./components/introduction";
import Profile from "./components/profile";

function App() {
	return (
		<div>
			<Profile />
			<Introduction name="Zaki Fadlan" />
			<Introduction name="Udin" />
		</div>
	);
}

export default App;

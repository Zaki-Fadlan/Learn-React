import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/myButton";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Fugiat nostrud pariatur eu voluptate officia do laborum. Ipsum aliquip
					ullamco dolor sit mollit anim deserunt ut do. Deserunt proident labore
					pariatur eiusmod sit enim tempor reprehenderit occaecat culpa non
					adipisicing sint voluptate. Fugiat commodo non exercitation duis sit
					ullamco. Quis sint cupidatat cupidatat ullamco reprehenderit sit velit
					magna aliqua eu culpa ipsum enim. Ex minim dolore consectetur laborum.
				</p>
				<MyButton />
				<Footer />
			</header>
		</div>
	);
};

export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
// import MyButton from "./components/myButton";
// import Footer from "./components/footer";

function App() {
	const navText = "Zaki Fadlan";

	// const navHeading = "Navigation Bar";
	// const clicked = () => {
	// 	return alert("ini Tombol My Button");
	// };
	// const paragraf = () => {
	// 	return <i>ini Paragraf</i>;
	// };
	const [getNavbarValue, setNavbarValue] = useState("");
	const changeNavbarValue = () => {
		// alert("Clicked");
		// console.log("Clicked");
		setNavbarValue("Project");
	};

	return (
		<div className="App">
			<header className="App-header">
				<Navbar navText={navText} navValue={getNavbarValue} />
				<h1>This is Homepage</h1>
				<button onClick={() => changeNavbarValue()}>Change Navigation</button>
				{/* <p>{getNavbarValue}</p> */}
				{/* <MyButton clicked={clicked} />
				<Footer paragraf={paragraf} /> */}
			</header>
		</div>
	);
}

export default App;

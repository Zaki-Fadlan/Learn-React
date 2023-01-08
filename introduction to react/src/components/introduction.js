function Introduction(props) {
	console.log("Parameter Kiriman : ", props.name);
	return (
		<div>
			<h1>Introduction</h1>
			<p>My Name is : {props.name}</p>
		</div>
	);
}

export default Introduction;

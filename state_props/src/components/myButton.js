const myButton = (props) => {
	return (
		<div>
			<button onClick={() => props.clicked()}>My Button</button>
		</div>
	);
};
export default myButton;

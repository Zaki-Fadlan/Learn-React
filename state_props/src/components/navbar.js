/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = (props) => {
	return (
		<div class="nav">
			<div class="nav-header">
				<div class="nav-title">{props.navText}</div>
			</div>
			<div class="nav-btn">
				<label for="nav-check">
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
			<div class="nav-links">
				<a href="#" target="_blank">
					Home
				</a>
				<a href="#" target="_blank">
					About
				</a>
				<a href="#" target="_blank">
					Contact
				</a>
				<a href="#" target="_blank">
					{props.navValue}
				</a>
			</div>
		</div>
	);
};
export default Navbar;

import React from "react";
import PropTypes from 'prop-types';

function Button({ children, isPurple }) {
	return (
		<a className={`inline-block rounded-full text-sm px-6 py-3 leading-none lg:mt-0  ${isPurple ? "text-white border-2 border-purple-700 bg-purple-700 hover:border-purple hover:text-white hover:bg-transparent" : "text-white border-2 border-pink-500 bg-pink-500 hover:border-pink-500 hover:text-black hover:bg-transparent"} `}>
			{children}
		</a>
	);
}

Button.defaultProps = {
	isPurple: false,
}

Button.propTypes = {
	isPurple : PropTypes.boolean,
}

export default Button;

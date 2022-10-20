import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import NavBar from "./NavBar";

var client = ZAFClient.init();

const App = () => {
	return (
		<StrictMode>
			<NavBar client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

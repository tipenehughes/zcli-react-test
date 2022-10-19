import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import Background from "./Background";

var client = ZAFClient.init();

const App = () => {
	return (
		<StrictMode>
			<Background client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

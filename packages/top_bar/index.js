import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import TopBar from "./TopBar";

var client = ZAFClient.init();

const App = () => {
	client.invoke("resize", { width: "200px", height: "200px" });

	return (
		<StrictMode>
			<TopBar client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

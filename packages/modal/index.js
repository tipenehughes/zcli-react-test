import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal";

var client = ZAFClient.init();

const App = () => {
	client.invoke("resize", { width: "100%", height: "200px" });

	return (
		<StrictMode>
			<Modal client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

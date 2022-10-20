import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import TicketEditor from "./TicketEditor";

var client = ZAFClient.init();

const App = () => {
	client.invoke("resize", { width: "300px", height: "100%" });

	return (
		<StrictMode>
			<TicketEditor client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

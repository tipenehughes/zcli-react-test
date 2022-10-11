import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import TicketSidebar from "../locations/TicketSidebar";

var client = ZAFClient.init();

const App = () => {
	console.log("App");
	return (
		<StrictMode>
			<TicketSidebar client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.querySelector(".main"));

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import TicketSidebar from "../locations/TicketSidebar";

var client = ZAFClient.init();

const App = () => {
	client.invoke("resize", { width: "100%", height: "200px" });

	return (
		<StrictMode>
			<TicketSidebar client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.querySelector(".main"));

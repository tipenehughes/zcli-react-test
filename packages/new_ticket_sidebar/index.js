import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import NewTicketSidebar from "./NewTicketSidebar";

var client = ZAFClient.init();

const App = () => {
	client.invoke("resize", { width: "100%", height: "200px" });

	return (
		<StrictMode>
			<NewTicketSidebar client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import OrganizationSidebar from "./OrganizationSidebar";

var client = ZAFClient.init();

const App = () => {
	client.invoke("resize", { width: "100%", height: "200px" });

	return (
		<StrictMode>
			<OrganizationSidebar client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import UserSidebar from "./UserSidebar";

var client = ZAFClient.init();

const App = () => {
	client.invoke("resize", { width: "100%", height: "200px" });

	return (
		<StrictMode>
			<UserSidebar client={client} />
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

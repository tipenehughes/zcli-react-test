import React, { useEffect, useState } from "react";
import { handleError } from "../lib/helpers";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { Theme } from "../modules/Theme";
import { DEFAULT_LOCALE } from "../lib/constants";

import I18n from "../lib/i18n";
import ErrorBoundary from "../modules/ErrorBoundary";
import Main from "../modules/Main";

export default function TicketSidebar({ client }) {
  
	// Setting up state
	const [currentUser, setCurrentUser] = useState(null);
	const [locale, setLocale] = useState(null);
	const [ticketSubject, setTicketSubject] = useState(null);
	const [ticketId, setTicketId] = useState(null);

	// Fetching data from Zendesk API with useEffect to ensure only runs on initial render
	useEffect(() => {
		initTicketSidebar();
	}, []);

	const initTicketSidebar = async () => {
		let currentUser = null;
		let ticketSubject = "";
		let ticketId = null;

		client.on("app.registered", (appData) => {
			ticketId = appData.context.ticketId;
		});

		try {
			const [user, subject] = await Promise.all([
				client.get("currentUser"),
				client.get("ticket.subject"),
			]);

			currentUser = user.currentUser;
			ticketSubject = subject["ticket.subject"];
		} catch (e) {
			handleError(e);
		}

		const locale = currentUser ? currentUser.locale : DEFAULT_LOCALE;

		I18n.loadTranslations(locale);

		setCurrentUser(currentUser);
		setLocale(locale);
		setTicketSubject(ticketSubject);
		setTicketId(ticketId);
	};

	return (
		currentUser !== null && (
			<ErrorBoundary>
				<ThemeProvider theme={Theme}>
					<Main
						currentUser={currentUser}
						locale={locale}
						ticketSubject={ticketSubject}
						ticketId={ticketId}
					/>
				</ThemeProvider>
			</ErrorBoundary>
		)
	);
}

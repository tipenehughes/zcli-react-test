import React from "react";
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from "@zendeskgarden/react-tables";

export default function Main({ currentUser, locale, ticketSubject, ticketId }) {
	return (
		<>
			<Table style={{ maxWidth: 300 }}>
				<Head>
					<HeaderRow>
						<HeaderCell>Ticket ID:</HeaderCell>
						<HeaderCell>Ticket Subject:</HeaderCell>
					</HeaderRow>
				</Head>
				<Body>
					<Row>
						<Cell>{ticketId}</Cell>
						<Cell>{ticketSubject}</Cell>
					</Row>
				</Body>
			</Table>
			<Table style={{ maxWidth: 300 }}>
				<Head>
					<HeaderRow>
						<HeaderCell>Current User:</HeaderCell>
						<HeaderCell>Locale:</HeaderCell>
					</HeaderRow>
				</Head>
				<Body>
					<Row>
						<Cell>{currentUser}</Cell>
						<Cell>{locale}</Cell>
					</Row>
				</Body>
			</Table>
		</>
	);
}

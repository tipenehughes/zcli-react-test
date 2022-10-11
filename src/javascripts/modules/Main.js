import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "@zendeskgarden/react-grid";
import { MD } from "@zendeskgarden/react-typography";

export default function Main({ data, currentUser, locale, ticketSubject, ticketId }) {
	return (
		<AppView
			data={data}
			currentUser={currentUser}
			locale={locale}
			ticketSubject={ticketSubject}
			ticketId={ticketId}
		/>
	);
}

function View(props) {
	return (
		<div className={props.className}>
			<Grid>
				<Row>
					<Col>
						<MD>Ticket ID: {props.ticketId} </MD>
					</Col>
					<Col>
						<MD>Ticket Subject: {props.ticketSubject}</MD>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

const AppView = styled(View)`
	#primaryResults {
		flex: 1;
		overflow-y: auto;
	}
	#primaryView {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
`;

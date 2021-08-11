import "./body.css";
import Table from "./table";
import { Container, Form, FormControl, Row, Col } from "react-bootstrap";

const Body = () => {
	return (
		<>
			<Container className='container'>
				<span className='bolder'>Add Another Keyword</span>
				<span className='count'>1/3</span>
				<span>Upgrade</span>
				<button className='advsrch'>Advance Search</button>

				<Form className='mt-3 but'>
					<FormControl
						placeholder='&#xF002;      Enter your filters here'
						style={{ fontFamily: "FontAwesome" }}
						className='p-3'></FormControl>
					<button className='but2'>SAVE FILTERS</button>
				</Form>
				<div className='table'>
					<span className='termstrack'>The terms you are tracking</span>
					<span className='datarefresh'>
						The data will be refreshed every 5 min
					</span>
					<Row className='mt-3 p-3 rows' style={{ backgroundColor: "white" }}>
						<Col className='colum' style={{ fontWeight: "bold" }}>
							Keywords
						</Col>
						<Col className='colum' style={{ fontWeight: "bold" }}>
							Goal
						</Col>
						<Col className='colum' style={{ fontWeight: "bold" }}>
							Matches
						</Col>
						<Col className='colum' style={{ fontWeight: "bold" }}>
							Search Status
						</Col>
						<Col className='colum' style={{ fontWeight: "bold" }}>
							Delete Keyword
						</Col>
					</Row>
					<Table />
				</div>
				<button className='mt-5 result_button'>View Results</button>
			</Container>
		</>
	);
};

export default Body;

import { FormControl, Col, Row, Navbar, Form, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./homepage.css";
import Body from "./body";

const Homepage = () => {
	return (
		<>
			<Row className='row'>
				<Col sm='12' lg='12' xl='2' xs='12' className='col'>
					<Row className='row termrow'>
						<Col sm='3' lg='3' xl='3' xs='12' className='col'>
							<img className='logo' src='./logo.png' alt='logo' />
						</Col>
						<Col sm='9' xl='9' xs='12' className='col'>
							<h2 style={{ marginTop: "15px", marginLeft: "5px" }}>
								TermMonitor
							</h2>
						</Col>

						<LinkContainer exact to='/' className='pointer'>
							<Row className='mt-3 p-2 row_items'>
								<Col xs='2'>
									<img src='./2.svg' alt='icon' />
								</Col>
								<Col xs='7' style={{ color: "grey", fontWeight: "400" }}>
									Add keywords
								</Col>
							</Row>
						</LinkContainer>
						<LinkContainer to='/matches' className='pointer'>
							<Row className='mt-3 p-2 row_items '>
								<Col xs='2'>
									<img src='./4.svg' alt='icon' />
								</Col>
								<Col xs='7' style={{ color: "grey", fontWeight: "400" }}>
									Matches
								</Col>
							</Row>
						</LinkContainer>
						<LinkContainer to='/manage_sources' className='pointer'>
							<Row className='mt-3 p-2 row_items'>
								<Col xs='2'>
									<img src='./1.svg' alt='icon' />
								</Col>
								<Col xs='7' style={{ color: "grey", fontWeight: "400" }}>
									Manage Sources
								</Col>
							</Row>
						</LinkContainer>
						<LinkContainer to='/integration' className='pointer'>
							<Row className='mt-3 p-2 row_items'>
								<Col xs='2'>
									<img src='./1.svg' alt='icon' />
								</Col>
								<Col xs='7' style={{ color: "grey", fontWeight: "400" }}>
									Integration
								</Col>
							</Row>
						</LinkContainer>
						<LinkContainer to='/alerts' className='pointer'>
							<Row className='mt-3 p-2 row_items'>
								<Col xs='2'>
									<img src='./1.svg' alt='icon' />
								</Col>
								<Col xs='7' style={{ color: "grey", fontWeight: "400" }}>
									Alerts
								</Col>
							</Row>
						</LinkContainer>

						<Row className='mt-4 p-2 row_items'>
							<Col xs='2'>
								<img src='./3.svg' alt='icon' />
							</Col>
							<Col xs='7'>
								<select
									name='Settings'
									style={{ backgroundColor: "none", border: "none" }}>
									<option value='settings'>Settings</option>
								</select>
							</Col>
						</Row>

						<Row className='mt-1 p-2 row_items' style={{ marginLeft: "100px" }}>
							<Col xs='1'></Col>
							<Col xs='6' style={{ color: "grey", fontWeight: "400" }}>
								Billings
							</Col>
						</Row>
					</Row>
				</Col>
				<Col
					sm='12'
					lg='12'
					xl='10'
					xs='12'
					className='col'
					style={{ backgroundColor: "#F8F8F8", height: "100vh" }}>
					<Navbar
						collapseOnSelect
						expand='lg'
						variant='dark'
						style={{ backgroundColor: "#3F0E40" }}>
						<Navbar.Brand className='p-3 keyword'>
							<b>KEYWORDS</b>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Form
								style={{ position: "absolute", right: "10%" }}
								className='searchform'>
								<FormControl placeholder=''></FormControl>
								<button
									className='searchbutton'
									style={{
										backgroundColor: "white",
										border: "none",
										color: "#3f0e40",
									}}>
									submit
									<span className='m-2'>
										<img src='./arrow.svg' alt='arrow' />
									</span>
								</button>
							</Form>
						</Navbar.Collapse>
					</Navbar>
					<Body />
				</Col>
			</Row>
		</>
	);
};

export default Homepage;

import { Row, Col } from "react-bootstrap";

const Table = () => {
	const content = {
		data: [
			{
				id: 1,
				keyword: "Blockchain",
				goal: "technology",
				matches: 18,
				search_status: "Done",
			},
			{
				id: 2,
				keyword: "ReactJs",
				goal: "technology",
				matches: 18,
				search_status: "Done",
			},
			{
				id: 3,
				keyword: "NextJs",
				goal: "technology",
				matches: 18,
				search_status: "Done",
			},
			{
				id: 4,
				keyword: "Typescript",
				goal: "technology",
				matches: 18,
				search_status: "Done",
			},
			{
				id: 5,
				keyword: "Javascript",
				goal: "technology",
				matches: 18,
				search_status: "Done",
			},
			{
				id: 6,
				keyword: "Django",
				goal: "technology",
				matches: 18,
				search_status: "Done",
			},
		],
	};
	return content.data.map((data1) => {
		return (
			<Row className='p-3 rows' style={{ backgroundColor: "white" }}>
				<Col className='colum'>{data1.keyword}</Col>
				<Col className='colum'>{data1.goal}</Col>
				<Col className='colum'>{data1.matches}</Col>
				<Col className='colum'>{data1.search_status}</Col>
				<Col className='colum'>
					<input type='radio' disabled />
				</Col>
			</Row>
		);
	});
};

export default Table;

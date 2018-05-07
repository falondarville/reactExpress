const express = require('express');
const app = express();

app.get('/api/customers', () => (req, res) => {

	// instead of hard coding, this is where the information will be pulled from the database
	const customers = [
		{id: 1, firstName: 'John', lastName: 'Doe'},
		{id: 2, firstName: 'Marie', lastName: 'Swanson'},
		{id: 3, firstName: 'Richard', lastName: 'Finkle'}
	];

	res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
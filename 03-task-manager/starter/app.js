const express = require('express');
const app = express();

// routes
app.get('/hello', (req, res) => {
	res.send('Task Manager app');
});

const port = 3000;

app.listen(port, console.log(`Server is listenixxng on port ${port}...`));

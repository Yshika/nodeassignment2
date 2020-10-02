const connectDB = require('./config/db')
const express = require('express');
const cors = require('cors');

const details = require('./routes/api/details')

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }))

app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Sending!'));

app.use('/api/details', details);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log('Server running!'))
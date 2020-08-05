const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require("path");


const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

try {
	mongoose.connect(process.env.MONGODB_URI|| "mongodb://localhost/mongoHeadlines" , {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}

app.use("/files", express.static(path.resolve(__dirname, "..", "files")))

app.use(routes);

app.use(express.static(path.resolve(__dirname, "../client/build")))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})
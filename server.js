const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const path = require('path');
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
var db;

MongoClient.connect(process.env.DB_URL, (error, client) => {
	if (error) {
		console.error('MongoDB 연결 오류:', error);
		return;
	}
	db = client.db('euro');
	app.listen(process.env.PORT, () => {
		console.log('서버 및 DB가 시작되었습니다.');
	});
});



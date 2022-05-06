import express from "express";
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.listen(port, () => console.log(`Server running on port: http://localhost ${ port }`));
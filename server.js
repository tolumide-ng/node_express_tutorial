import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Congratulations' }));

const port = process.env.PORT || 3000;
console.log(`app is running on port ${port}`);

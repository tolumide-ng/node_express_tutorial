import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import ReflectionWithJsObject from './src/usingJSObject/controllers/Reflection';
import ReflectionWithDB from './src/usingDB/controllers/Reflection';

dotenv.config();
const Reflection = process.env.TYPE === 'db'? ReflectionWithDB : ReflectionWithJsObject;
const app = express();


app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Congratulations! Your first endpoint here!' }));

app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);


const port = process.env.PORT || 5432;
console.log(`app is running on port ${port}`);
app.listen(port);
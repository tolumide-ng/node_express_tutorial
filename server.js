import express from 'express';
import Reflection from './src/controllers/Reflection';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Congratulations' }));

app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);


const port = process.env.PORT || 3000;
console.log(`app is running on port ${port}`);
app.listen(port);
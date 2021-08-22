import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './models/dbCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  'mongodb+srv://admin:8iv5ubplnZS1iQhD@cluster0.mafvp.mongodb.net/appCloneDB?retryWrites=true&w=majority';

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, resp) => resp.status(200).send('Hello World'));

app.post('/app-clone/cards', (req, resp) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      resp.status(500).send(err);
    } else {
      resp.status(201).send;
    }
  });
});

app.get('/app-clone/cards', (req, resp) => {
  Cards.find((err, data) => {
    if (err) {
      resp.status(500).send(err);
    } else {
      resp.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost:${port}`));

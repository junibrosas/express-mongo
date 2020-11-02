const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = require('express')();

// const mongoURL = 'mongodb://localhost/express-mongo';
// Path to connect to MongoDB from docker container instead of local
const mongoURL = 'mongodb://mongo:27017/expressmongo';

// connect to Mongo daemon
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// DB schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

Item = mongoose.model('item', ItemSchema);
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("it's working :) hello world!");
});

const port = 3000;

app.listen(port, () => console.log(`Server running at ${port}`));
